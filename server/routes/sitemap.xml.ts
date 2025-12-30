import { defineEventHandler, getRequestURL, setHeader } from "h3";
import { useRuntimeConfig } from "#imports";

type UrlEntry = {
  loc: string;
  lastmod?: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toLastMod(value?: string | null) {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

function resolvePublicBase(config: { public?: Record<string, unknown> }, siteOrigin: string) {
  const apiOrigin = (config.public as any)?.apiOrigin;
  const apiBase = (config.public as any)?.apiBase || "";
  if (apiOrigin) {
    return String(apiOrigin).replace(/\/$/, "");
  }
  if (/^https?:\/\//i.test(String(apiBase))) {
    return String(apiBase).replace(/\/api\/v1$/i, "").replace(/\/$/, "");
  }
  return siteOrigin;
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const siteOrigin =
    String((config.public as any)?.siteUrl || getRequestURL(event).origin).replace(
      /\/$/,
      ""
    );
  const publicBase = resolvePublicBase(config, siteOrigin);

  const urls: UrlEntry[] = [];
  const seen = new Set<string>();

  const addUrl = (path: string, meta?: Omit<UrlEntry, "loc">) => {
    if (!path) return;
    const loc = /^https?:\/\//i.test(path)
      ? path
      : `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;
    if (seen.has(loc)) return;
    seen.add(loc);
    urls.push({ loc, ...meta });
  };

  const staticRoutes: Array<{
    path: string;
    changefreq?: UrlEntry["changefreq"];
    priority?: number;
  }> = [
    { path: "/", changefreq: "daily", priority: 1.0 },
    { path: "/products", changefreq: "weekly", priority: 0.9 },
    { path: "/categories", changefreq: "weekly", priority: 0.8 },
    { path: "/education", changefreq: "weekly", priority: 0.7 },
    { path: "/representatives", changefreq: "weekly", priority: 0.7 },
    { path: "/about", changefreq: "monthly", priority: 0.6 },
    { path: "/warranty/check", changefreq: "monthly", priority: 0.5 },
    { path: "/warranty/policies", changefreq: "monthly", priority: 0.5 },
    { path: "/solutions/automation", changefreq: "monthly", priority: 0.3 },
    { path: "/insights/reports", changefreq: "monthly", priority: 0.3 },
  ];

  staticRoutes.forEach((route) => addUrl(route.path, route));

  const fetchJson = async (url: string) => {
    try {
      const res = await fetch(url, { headers: { accept: "application/json" } });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  };

  const [blogs, centers, products, brands, categories] = await Promise.all([
    fetchJson(`${publicBase}/public/content/blogs`),
    fetchJson(`${publicBase}/public/service-centers`),
    fetchJson(`${publicBase}/public/content/products`),
    fetchJson(`${publicBase}/public/content/brands`),
    fetchJson(`${publicBase}/public/content/categories`),
  ]);

  if (Array.isArray(blogs)) {
    for (const item of blogs) {
      const slug = String(item?.slug || "").trim();
      if (!slug) continue;
      addUrl(`/education/${slug}`, { lastmod: toLastMod(item?.date) });
    }
  }

  const centerItems = Array.isArray(centers)
    ? centers
    : Array.isArray(centers?.items)
    ? centers.items
    : [];
  for (const item of centerItems) {
    const slug = String(item?.slug || "").trim();
    if (!slug) continue;
    addUrl(`/representatives/${slug}`);
  }

  if (Array.isArray(products)) {
    for (const item of products) {
      if (item?.isActive === false || item?.status === "inactive") continue;
      const slug = String(item?.slug || "").trim();
      if (!slug) continue;
      addUrl(`/products/${slug}`);
    }
  }

  if (Array.isArray(brands)) {
    for (const item of brands) {
      if (item?.isActive === false) continue;
      const slug = String(item?.slug || "").trim();
      if (!slug) continue;
      addUrl(`/brands/${slug}`);
    }
  }

  if (categories && typeof categories === "object") {
    const children = Array.isArray((categories as any).children)
      ? (categories as any).children
      : [];
    for (const item of children) {
      if (item?.isActive === false) continue;
      const parentSlug = String(item?.parentSlug || "").trim();
      const slug = String(item?.slug || "").trim();
      if (!parentSlug || !slug) continue;
      addUrl(`/categories/${parentSlug}/${slug}`);
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((entry) => {
      const lines = [
        "<url>",
        `<loc>${escapeXml(entry.loc)}</loc>`,
      ];
      if (entry.lastmod) {
        lines.push(`<lastmod>${escapeXml(entry.lastmod)}</lastmod>`);
      }
      if (entry.changefreq) {
        lines.push(`<changefreq>${entry.changefreq}</changefreq>`);
      }
      if (typeof entry.priority === "number") {
        lines.push(`<priority>${entry.priority.toFixed(1)}</priority>`);
      }
      lines.push("</url>");
      return lines.join("");
    }),
    "</urlset>",
  ].join("");

  setHeader(event, "Content-Type", "application/xml; charset=UTF-8");
  setHeader(event, "Cache-Control", "public, max-age=300, s-maxage=300");
  return xml;
});
