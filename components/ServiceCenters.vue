<template>
  <section class="container mx-auto px-4 py-6" dir="rtl">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-lg font-bold">Б?А?А?Ц?АЩ А?А?Б?А?А?</h2>
      <NInput
        v-model:value="q"
        placeholder="А?А?А?А?Б? А?А? А?Б?А?/Б?А?Б?/А?А?А?А?┐??"
        class="w-64 hidden md:block"
        clearable
      />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- Б?Д?А?А? -->
      <div class="space-y-3">
        <article
          v-for="c in filtered"
          :key="c.id"
          class="rounded-2xl bg-white/90 backdrop-blur ring-1 ring-slate-200 p-5 shadow-sm"
        >
          <div class="flex items-center gap-2">
            <h3 class="font-semibold">{{ c.title }}</h3>
            <span class="text-xs text-slate-500">┐?? {{ c.city }}</span>
            <span class="ms-auto text-xs text-slate-500">
              {{ c.contact.hours.length ? c.contact.hours.join(" / ") : "-" }}
            </span>
          </div>
          <p class="mt-2 text-slate-700 text-sm">
            {{ c.contact.address || "-" }}
          </p>

          <div class="mt-3 flex flex-wrap gap-2">
            <a
              v-if="c.contact.phones.length"
              class="btn-outline"
              :href="`tel:${c.contact.phones[0]}`"
              aria-label="А?Б?А?А?"
            >
              <Icon name="ph:phone-duotone" /> А?Б?А?А?
            </a>
            <a
              v-if="c.contact.mapLink"
              class="btn-outline"
              :href="c.contact.mapLink"
              target="_blank"
              rel="noopener"
              aria-label="Б?Б?А?Б?"
            >
              <Icon name="ph:map-pin-duotone" /> Б?А?А?Б?А?Б? А?А? Б?Б?А?Б?
            </a>
          </div>
        </article>

        <template v-if="!centers.length">
          <NSkeleton text :repeat="6" />
        </template>
      </div>

      <!-- А?А?Д? Б?Б?А?Б?/Б?Б?А?А?А? (Б?А?Б?А?Б? А?Б?Б?) -->
      <div
        class="rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 ring-1 ring-slate-200 p-5"
      >
        <h3 class="font-semibold mb-2">Б?Б?А?Б? Б?А?А?Ц?АЩ (А?Б?Б?)</h3>
        <p class="text-slate-600 text-sm">
          А?А? Б?А?А?Б?Б? Б?Б?А?Д?Д? Б?Д?┐??А?Б?А?Б? А?АЩ
          <b>Leaflet</b> Д?А? <b>Google Maps</b> А?А?А?Б?А?А?Б? Ц?А?А?. Б?А?Б?А?Б? А?А? А?Ц?Б?Б?Б?
          ≥ўБ?А?А?Б?А?Б? А?А? Б?Б?А?Б?≥╞ А?АЩ Б?А? Ц?А?А?А? А?А?А?Б?А?А?Б? Ц?Б?Д?А?.
        </p>
        <div
          class="mt-4 h-64 rounded-xl bg-white/70 grid place-items-center text-slate-400"
        >
          Б?Б?А?Б? А?Б?┐??АЩБ?А?Д?┐??
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { NInput, NSkeleton } from "naive-ui";
import { getServiceCenters } from "@/utils/service-centers";
import type { ServiceCenter } from "@/types/service-center";

const centers = ref<ServiceCenter[]>([]);
const q = ref("");

onMounted(async () => {
  centers.value = await getServiceCenters();
});

const filtered = computed(() => {
  const s = q.value?.trim();
  if (!s) return centers.value;
  const needle = s.toLowerCase();
  return centers.value.filter((c) => {
    const haystack = [
      c.title,
      c.city,
      c.tagline,
      c.summary,
      c.contact.address,
      c.services.join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
});
</script>

<style scoped>
.btn-outline {
  @apply inline-flex items-center gap-2 rounded-xl px-3 py-2 ring-1 ring-slate-300 text-slate-700 hover:bg-white transition;
}
</style>
