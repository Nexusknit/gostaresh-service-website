import type { FetchOptions } from "ofetch";

type AnyFetchOptions = FetchOptions<"json">;

function resolvePublicBase(): string {
  const config =
    typeof useRuntimeConfig === "function"
      ? useRuntimeConfig()
      : ({ public: {} } as { public: Record<string, unknown> });
  const rawBase = (config.public as any)?.apiBase || "/api/v1";
  const rawOrigin = (config.public as any)?.apiOrigin || "";
  const cleaned = String(rawBase || "").replace(/\/$/, "");
  const withoutApi = cleaned.replace(/\/api\/v1$/i, "");
  const isAbsolute = /^https?:\/\//i.test(withoutApi);
  if (!isAbsolute && rawOrigin) {
    const origin = String(rawOrigin || "").replace(/\/$/, "");
    const basePath = withoutApi
      ? withoutApi.startsWith("/")
        ? withoutApi
        : `/${withoutApi}`
      : "";
    return `${origin}${basePath}`.replace(/\/$/, "");
  }
  try {
    if (process.client) {
      return new URL(withoutApi || "/", window.location.origin)
        .toString()
        .replace(/\/$/, "");
    }
  } catch {
    // ignore URL parsing errors and fall back to relative base
  }
  return withoutApi;
}

function buildPublicUrl(path: string): string {
  const base = resolvePublicBase();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base) return normalized;
  return `${base}${normalized}`;
}

export function publicGet<T>(path: string, opts?: AnyFetchOptions) {
  return $fetch<T>(buildPublicUrl(path), { ...(opts ?? {}), method: "GET" });
}
