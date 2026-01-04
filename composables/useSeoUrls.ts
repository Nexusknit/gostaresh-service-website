import { computed } from "vue";

const firstHeaderValue = (value?: string) => {
  if (!value) return "";
  return value.split(",")[0].trim();
};

export function useSeoUrls() {
  const route = useRoute();
  const config = useRuntimeConfig();
  const requestUrl = process.server ? useRequestURL() : null;
  const requestHeaders = process.server ? useRequestHeaders() : null;

  const origin = computed(() => {
    const siteUrl = (config.public as any)?.siteUrl;
    if (siteUrl) {
      return String(siteUrl).replace(/\/$/, "");
    }
    if (process.server && requestHeaders) {
      const host = firstHeaderValue(
        requestHeaders["x-forwarded-host"] || requestHeaders["host"]
      );
      if (host) {
        const proto = firstHeaderValue(
          requestHeaders["x-forwarded-proto"] ||
            requestHeaders["x-forwarded-protocol"] ||
            requestHeaders["x-forwarded-scheme"]
        );
        const scheme = proto || requestUrl?.protocol.replace(":", "") || "https";
        return `${scheme}://${host}`;
      }
    }
    if (process.server && requestUrl) {
      return requestUrl.origin;
    }
    if (typeof window !== "undefined") {
      return window.location.origin;
    }
    return "";
  });

  const canonicalUrl = computed(() => {
    const base = origin.value;
    const path = route.path || "/";
    if (!base) return path;
    return new URL(path, base).toString();
  });

  const toAbsoluteUrl = (input?: string | null) => {
    const raw = String(input ?? "").trim();
    if (!raw) return undefined;
    if (/^https?:\/\//i.test(raw)) return raw;
    if (!origin.value) return raw;
    return `${origin.value}${raw.startsWith("/") ? raw : `/${raw}`}`;
  };

  return { origin, canonicalUrl, toAbsoluteUrl };
}
