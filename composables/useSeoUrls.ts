import { computed } from "vue";

export function useSeoUrls() {
  const route = useRoute();
  const config = useRuntimeConfig();
  const requestUrl = process.server ? useRequestURL() : null;

  const origin = computed(() => {
    const siteUrl = (config.public as any)?.siteUrl;
    if (siteUrl) {
      return String(siteUrl).replace(/\/$/, "");
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
