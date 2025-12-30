import { publicGet } from "@/utils/publicApi";

const cache = new Map<string, unknown>();

const normalizeKey = (raw: string) =>
  String(raw || "")
    .trim()
    .replace(/\.json$/i, "");

export async function fetchPublicContent<T>(key: string): Promise<T> {
  const normalized = normalizeKey(key);
  if (cache.has(normalized)) {
    return cache.get(normalized) as T;
  }
  const data = await publicGet<T>(`/public/content/${normalized}`);
  cache.set(normalized, data);
  return data;
}

export async function fetchPublicContentSafe<T>(
  key: string,
  fallback: T
): Promise<T> {
  try {
    return await fetchPublicContent<T>(key);
  } catch {
    return fallback;
  }
}
