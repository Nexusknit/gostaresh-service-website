<template>
  <div class="container mx-auto px-4 py-10" dir="rtl">
    <header class="mb-10 text-center">
      <h1 class="text-3xl font-extrabold text-slate-800 mb-3">
        ¬„Ê“‘ Ê »·«ê
      </h1>
      <p class="mx-auto max-w-2xl text-slate-600">
         «“Âù —Ì‰ ‰ò«  Ê ¬„Ê“‘ùÂ«Ì ê” —‘ ”—ÊÌ” »—«Ì ‰êÂœ«—Ì »Â — „Õ’Ê·«  Ê
        «” ›«œÂ? ÂÊ‘„‰œ«‰Â «“ Œœ„«  Å” «“ ›—Ê‘.
      </p>
    </header>

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="post in orderedPosts"
        :key="post.slug"
        class="flex flex-col rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm transition hover:shadow-lg overflow-hidden"
      >
        <NuxtLink :to="`/education/${post.slug}`" class="flex h-full flex-col">
          <div v-if="post.cover" class="h-48 w-full overflow-hidden">
            <img
              :src="post.cover"
              :alt="post.title"
              class="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
          <div v-else class="h-48 w-full bg-gradient-to-br from-sky-200 via-emerald-200 to-slate-100"></div>

          <div class="flex flex-1 flex-col gap-4 p-6">
            <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span class="rounded-full bg-slate-100 px-3 py-1">
                {{ formatDate(post.date) }}
              </span>
              <span>{{ post.readMinutes }} œﬁÌﬁÂ „ÿ«·⁄Â</span>
            </div>

            <h2 class="text-xl font-semibold text-slate-800 leading-tight">
              {{ post.title }}
            </h2>

            <p class="text-sm text-slate-600">
              {{ post.excerpt }}
            </p>

            <div class="mt-auto flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="rounded-full bg-sky-50 px-3 py-1 text-xs text-sky-600"
                >{{ tag }}</span
              >
            </div>
          </div>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { BlogPost } from "@/types/blog";
import { fetchPublicContentSafe } from "@/utils/publicContent";

useSeoMeta({
  title: "¬„Ê“‘ Ê »·«ê",
  description: "„Ã„Ê⁄Â „ﬁ«·«  Ê ‰ò«  ¬„Ê“‘Ì ê” —‘ ”—ÊÌ” »—«Ì ò«—»—«‰ Œœ„«  Å” «“ ›—Ê‘",
});

const posts = await fetchPublicContentSafe<BlogPost[]>("blogs", []);

const orderedPosts = computed(() =>
  [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
);

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
  }).format(new Date(iso));
</script>
