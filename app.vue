<template>
  <NConfigProvider :rtl-enabled="true">
    <NMessageProvider>
      <NDialogProvider>
        <NNotificationProvider>
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
          <ClientOnly>
            <AppPageLoader />
          </ClientOnly>
        </NNotificationProvider>
      </NDialogProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
} from "naive-ui";
import AppPageLoader from "@/components/AppPageLoader.vue";
import "@/assets/css/main.css";

const config = useRuntimeConfig();
const siteName = computed(
  () => (config.public as any)?.siteName || "Gostaresh Service"
);
const { canonicalUrl } = useSeoUrls();

useHead(() => ({
  link: canonicalUrl.value
    ? [{ rel: "canonical", href: canonicalUrl.value }]
    : [],
}));

useSeoMeta({
  ogSiteName: () => siteName.value,
  ogLocale: "fa_IR",
});
</script>
