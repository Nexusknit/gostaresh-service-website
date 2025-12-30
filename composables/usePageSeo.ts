import { computed, unref } from "vue";
import type { ComputedRef, Ref } from "vue";

type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;

export type PageSeoOptions = {
  title?: MaybeRef<string | null | undefined>;
  description?: MaybeRef<string | null | undefined>;
  image?: MaybeRef<string | null | undefined>;
  type?: "website" | "article";
  noindex?: boolean;
};

export function usePageSeo(options: PageSeoOptions) {
  const config = useRuntimeConfig();
  const fallbackDescription = (config.public as any)?.siteTagline || undefined;
  const { canonicalUrl, toAbsoluteUrl } = useSeoUrls();

  const title = computed(() => {
    const value = unref(options.title);
    return value ? String(value) : undefined;
  });

  const description = computed(() => {
    const value = unref(options.description);
    return value ? String(value) : fallbackDescription;
  });

  const image = computed(() => {
    const value = unref(options.image);
    return value ? toAbsoluteUrl(String(value)) : undefined;
  });

  const type = options.type ?? "website";

  useSeoMeta({
    title: () => title.value,
    description: () => description.value,
    ogTitle: () => title.value,
    ogDescription: () => description.value,
    ogImage: () => image.value,
    ogType: type,
    ogUrl: () => canonicalUrl.value || undefined,
    twitterCard: () => (image.value ? "summary_large_image" : "summary"),
    twitterTitle: () => title.value,
    twitterDescription: () => description.value,
    twitterImage: () => image.value,
  });

  if (options.noindex) {
    useHead({
      meta: [
        { name: "robots", content: "noindex, nofollow" },
        { name: "googlebot", content: "noindex, nofollow" },
      ],
    });
  }
}
