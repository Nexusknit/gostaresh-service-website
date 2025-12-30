const disablePrerender = ["1", "true", "yes"].includes(
  (process.env.NUXT_DISABLE_PRERENDER || "").toLowerCase()
);
const enablePrerender = !disablePrerender;
const disableNitroMinify = ["1", "true", "yes"].includes(
  (process.env.NUXT_DISABLE_NITRO_MINIFY || "").toLowerCase()
);
const REPRESENTATIVES_SIGNUP_PATH = "/representatives/signup";

const routeRules = {
  [REPRESENTATIVES_SIGNUP_PATH]: {
    prerender: false,
    redirect: { to: "/representatives", statusCode: 302 },
  },
  ...(enablePrerender ? { "/education/**": { prerender: true } } : {}),
};

const DEFAULT_API_BASE = process.env.NUXT_PUBLIC_API_BASE || "/api/v1";
const DEFAULT_API_ORIGIN = process.env.NUXT_PUBLIC_API_ORIGIN || "";
const DEFAULT_WARRANTY_API_BASE =
  process.env.NUXT_PUBLIC_WARRANTY_API_BASE ||
  process.env.NUXT_PUBLIC_API_BASE ||
  "/api/v1";

const buildPublicContentUrl = (key: string) => {
  const normalizedKey = String(key || "").trim().replace(/^\//, "");
  const base = String(DEFAULT_API_BASE || "").trim();
  if (/^https?:\/\//i.test(base)) {
    return `${base.replace(/\/$/, "")}/public/content/${normalizedKey}`;
  }
  if (!DEFAULT_API_ORIGIN) return null;
  const origin = DEFAULT_API_ORIGIN.replace(/\/$/, "");
  const basePath = base.startsWith("/") ? base : `/${base}`;
  return `${origin}${basePath.replace(/\/$/, "")}/public/content/${normalizedKey}`;
};

const fetchBlogRoutes = async () => {
  const url = buildPublicContentUrl("blogs");
  if (!url) {
    console.warn(
      "[nuxt.config] Skipping blog prerender routes; set NUXT_PUBLIC_API_ORIGIN or an absolute NUXT_PUBLIC_API_BASE to enable."
    );
    return [];
  }
  try {
    const res = await fetch(url, { headers: { accept: "application/json" } });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = (await res.json()) as Array<{ slug?: string }>;
    if (Array.isArray(data)) {
      return data
        .map((item) => (item && item.slug ? `/education/${item.slug}` : null))
        .filter((route): route is string => Boolean(route));
    }
  } catch (error) {
    console.warn(
      "[nuxt.config] Failed to fetch blog routes for prerender",
      error
    );
  }
  return [];
};

const SITE_NAME =
  "\u06af\u0633\u062a\u0631\u0634 \u0633\u0631\u0648\u06cc\u0633";
const SITE_TAGLINE =
  "\u062e\u062f\u0645\u0627\u062a \u0648 \u062a\u0639\u0645\u06cc\u0631\u0627\u062a";

export default defineNuxtConfig(async () => {
  const blogRoutes = enablePrerender ? await fetchBlogRoutes() : [];
  return {
    runtimeConfig: {
      public: {
        apiBase: DEFAULT_API_BASE,
        apiOrigin: DEFAULT_API_ORIGIN,
        warrantyApiBase: DEFAULT_WARRANTY_API_BASE,
      },
    },
    devtools: { enabled: true },
    ssr: true,

    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@pinia/nuxt", "@nuxt/icon"],

    vue: {
      compilerOptions: {
        isCustomElement: (tag) =>
          ["lottie-player", "dotlottie-player"].includes(tag),
      },
    },

    app: {
      head: {
        htmlAttrs: { lang: "fa" },
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width,initial-scale=1" },
        ],
        titleTemplate: (t) =>
          t ? `${t} | ${SITE_NAME}` : `${SITE_NAME} | ${SITE_TAGLINE}`,
        link: [{ rel: "icon", href: "/brand/favicon.ico" }],
      },
    },

    routeRules,

    tailwindcss: { viewer: false },

    build: {
      transpile: ["naive-ui", "vueuc", "vdirs", "vooks"],
    },

    vite: {
      resolve: {
        alias: {
          "dayjs/locale/fa": "dayjs/locale/fa.js",
        },
      },
      ssr: {
        noExternal: ["naive-ui", "vueuc", "vdirs", "vooks", "dayjs", "jalaliday"],
      },
      optimizeDeps: {
        include: ["dayjs/locale/fa.js", "naive-ui", "vueuc", "vdirs", "vooks"],
      },
    },

    nitro: {
      minify: !disableNitroMinify,
      prerender: {
        routes: blogRoutes,
        crawlLinks: enablePrerender,
        ignore: [REPRESENTATIVES_SIGNUP_PATH],
      },
    },
  };
});
