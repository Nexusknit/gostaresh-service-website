<template>
  <div class="space-y-6" dir="rtl">
    <h1 class="text-xl font-bold">«” ⁄·«„ Ê÷⁄Ì  ê«—«‰ Ì</h1>

    <!-- ›—„ -->
    <n-card :bordered="false" class="rounded-2xl ring-1 ring-slate-200/70">
      <n-alert type="info" :show-icon="true" class="mb-4">
        ‘„«—Â —« œﬁÌﬁ Ê »œÊ‰ ›«’·Â Ê«—œ ò‰Ìœ. ‰„Ê‰Â:
        <n-tag
          v-for="s in sampleSerials"
          :key="s"
          size="small"
          round
          type="info"
          :bordered="false"
          class="ltr cursor-pointer mx-1"
          @click="fillSample(s)"
        >
          {{ s }}
        </n-tag>
      </n-alert>

      <n-form :model="form" :rules="rules" label-placement="top" ref="formRef">
        <!-- „Ê»«Ì·: ⁄„ÊœÌ | œ”ò «Å: œ— Ìò —œÌ› -->
        <div class="flex flex-col md:flex-row md:items-end gap-4">
          <!-- ”—Ì«· -->
          <div class="w-full md:flex-1 md:min-w-[360px]">
            <n-form-item
              label="”—Ì«· ò«·«/ê«—«‰ Ì Ì« ‘„«—Â —ÂêÌ—Ì"
              path="serial"
              class="mb-0"
            >
              <div class="ltr">
                <n-input
                  v-model:value="form.serial"
                  size="large"
                  clearable
                  placeholder="„À·«: SN1234567890"
                  @update:value="onSerialInput"
                  @keydown.enter.prevent="submit"
                >
                  <template #prefix>
                    <Icon name="ph:fingerprint-duotone" size="18" />
                  </template>
                </n-input>
              </div>
              <template #feedback>
                <div class="text-xs text-slate-500">
                  Õ—Ê› «‰ê·Ì”Ì Ê «⁄œ«œ „Ã«“ «” ∫ Œÿ  Ì—Â „Ã«“.
                </div>
              </template>
            </n-form-item>
          </div>

          <!-- „Ê»«Ì· -->
          <div v-if="false" class="w-full md:w-[32%]">
            <n-form-item label="„Ê»«Ì· («Œ Ì«—Ì)" path="phone" class="mb-0">
              <div class="ltr">
                <n-input
                  v-model:value="form.phone"
                  size="large"
                  clearable
                  maxlength="11"
                  placeholder="09xxxxxxxxx"
                  @update:value="onPhoneInput"
                  @keydown.enter.prevent="submit"
                >
                  <template #prefix>
                    <Icon name="ph:device-mobile-duotone" size="18" />
                  </template>
                </n-input>
              </div>
              <template #feedback>
                <div class="text-xs text-slate-500">
                  »—«Ì «⁄·«‰  €ÌÌ— Ê÷⁄Ì ° „Ìù Ê«‰Ìœ ‘„«—Â „Ê»«Ì· —« Ê«—œ ò‰Ìœ.
                </div>
              </template>
            </n-form-item>
          </div>

          <!-- œò„ÂùÂ« -->
          <div class="w-full md:w-[16%] md:pt-[28px]">
            <div class="flex gap-2 md:justify-end">
              <n-button
                type="primary"
                size="large"
                strong
                round
                class="w-full md:w-auto"
                :loading="loading"
                @click="submit"
              >
                «” ⁄·«„
              </n-button>
              <n-button
                quaternary
                size="large"
                round
                class="w-full md:w-auto"
                @click="resetForm"
              >
                Å«ò ò—œ‰
              </n-button>
            </div>
          </div>
        </div>
      </n-form>
    </n-card>

    <!-- ‰ ÌÃÂ -->
    <n-card
      v-if="result"
      :segmented="{ content: 'soft', footer: 'soft' }"
      class="rounded-2xl"
      :bordered="false"
    >
      <template #header>
        <div
          class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
          <div class="flex items-center gap-3">
            <span class="text-base font-semibold">‰ ÌÃÂ «” ⁄·«„</span>
            <n-tag :type="result.warrantyActive ? 'success' : 'error'">
              {{ result.warrantyActive ? "ê«—«‰ Ì ›⁄«·" : "ê«—«‰ Ì „‰ﬁ÷Ì" }}
            </n-tag>
          </div>
          <div class="flex items-center gap-2 text-xs text-slate-400">
            <Icon name="ph:fingerprint-duotone" class="text-base" />
            <span class="ltr font-mono text-sm text-slate-500">{{
              result.serial
            }}</span>
          </div>
        </div>
      </template>

      <n-spin :show="loading">
        <div class="space-y-6">
          <section
            :class="[
              'rounded-2xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors',
              statusVisual.container,
            ]"
          >
            <div
              class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            >
              <div class="flex items-center gap-3">
                <div
                  :class="[
                    'grid h-12 w-12 place-items-center rounded-full text-2xl',
                    statusVisual.iconWrapper,
                  ]"
                >
                  <Icon :name="statusVisual.icon" />
                </div>
                <div class="space-y-1">
                  <p class="text-sm text-slate-600/80">Ê÷⁄Ì  ò‰Ê‰Ì</p>
                  <p class="text-xl font-semibold">
                    {{
                      result.warrantyActive ? "ê«—«‰ Ì ›⁄«·" : "ê«—«‰ Ì „‰ﬁ÷Ì"
                    }}
                    {{ result.serviceCenter }}
                  </p>
                  <p class="text-xs text-slate-500">
                    ¬Œ—Ì‰ »—Ê“—”«‰Ì: {{ j(result.updatedAt) }}
                  </p>
                </div>
              </div>

              <div
                class="flex flex-wrap items-center justify-start gap-6 text-slate-700"
              >
                <div class="min-w-[110px] text-center">
                  <p class="text-xs text-slate-500">—Ê“ »«ﬁÌ„«‰œÂ</p>
                  <p class="text-3xl font-bold" :class="statusVisual.accent">
                    {{ toFa(remainDays) }}
                  </p>
                </div>
                <div class="hidden h-12 w-px bg-white/40 md:block" />
                <div class="min-w-[140px] text-center">
                  <p class="text-xs text-slate-500">Å«Ì«‰ ê«—«‰ Ì</p>
                  <p class="text-base font-semibold">
                    {{ j(result.expireDate) }}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="grid gap-3 md:grid-cols-2">
            <div
              v-for="item in detailCards"
              :key="item.label"
              class="rounded-xl border border-slate-200/70 bg-slate-50/50 px-4 py-3"
            >
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-2 text-sm text-slate-500">
                  <Icon :name="item.icon" class="text-lg text-slate-400" />
                  <span>{{ item.label }}</span>
                </div>
                <div
                  :class="[
                    'text-sm font-semibold text-slate-700',
                    item.tone,
                    item.mono ? 'ltr font-mono text-base' : '',
                  ]"
                >
                  {{ item.value }}
                  <span
                    v-if="item.suffix"
                    class="text-xs font-normal text-slate-500"
                    >{{ item.suffix }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              class="mb-2 flex items-center justify-between text-sm text-slate-600"
            >
              <span>ÅÌ‘—›  „’—› ê«—«‰ Ì</span>
              <span class="font-medium">{{ toFa(progressPct) }}%</span>
            </div>
            <n-progress
              type="line"
              :percentage="progressPct"
              :height="10"
              :color="statusVisual.progress"
              :indicator-text-color="statusVisual.progress"
              :rail-color="'rgba(148, 163, 184, 0.25)'"
              :show-indicator="false"
            />
          </div>

          <!-- <div class="space-y-4">
            <n-divider>—Ê‰œ —”ÌœêÌ</n-divider>
            <WarrantyStatusSteps :status="result.status" />
          </div> -->

          <!-- <n-alert
            v-if="result.note"
            type="warning"
            :show-icon="true"
            class="rounded-xl border-none !bg-amber-50 text-amber-700"
          >
            {{ result.note }}
          </n-alert> -->

          <div
            class="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-slate-600"
          >
            <div class="flex items-center gap-2">
              <Icon name="ph:map-pin-duotone" class="text-lg text-slate-400" />
              <span>„—ò“ Œœ„« : {{ result.serviceCenter }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-400">
              <Icon
                name="ph:clock-counter-clockwise-duotone"
                class="text-base"
              />
              <span>¬Œ—Ì‰ »—Ê“—”«‰Ì {{ j(result.updatedAt) }}</span>
            </div>
          </div>
        </div>
      </n-spin>

      <template #action>
        <n-space wrap>
          <n-button quaternary @click="printPage">
            <template #icon>
              <Icon name="ph:printer-duotone" />
            </template>
            ç«Å
          </n-button>
          <n-button quaternary @click="copyLink">
            <template #icon>
              <Icon name="ph:link-duotone" />
            </template>
            òÅÌ ·Ì‰ò ÅÌêÌ—Ì
          </n-button>
          <n-button
            v-if="false"
            quaternary
            :disabled="!form.phone"
            @click="enableSms"
          >
            <template #icon>
              <Icon name="ph:chat-circle-text-duotone" />
            </template>
            ›⁄«·”«“Ì ÅÌ«„ò
          </n-button>
        </n-space>
      </template>
    </n-card>

    <!-- ÅÌœ« ‰‘œ -->
    <n-result
      v-else-if="hasSearched && !loading"
      status="warning"
      title="„Ê—œÌ Ì«›  ‰‘œ"
      :description="`”—Ì«· ´${form.serial || 'ó'}ª œ— ”«„«‰Â ÅÌœ« ‰‘œ.`"
    >
      <template #footer>
        <div class="space-y-2 text-right">
          <div class="text-slate-600 text-sm">
            ·ÿ›« «Ì‰ „Ê«—œ —« »——”Ì ò‰Ìœ:
          </div>
          <ul class="list-disc pr-5 text-slate-600 text-sm">
            <li>«“ «⁄œ«œ «‰ê·Ì”Ì «” ›«œÂ ò‰Ìœ (??0° ??1 Ö)</li>
            <li>›«’·Â Ê ò«—«ò —Â«Ì €Ì—÷—Ê—Ì —« Õ–› ò‰Ìœ</li>
            <li>Õ—Ê› —« «‰ê·Ì”Ì Ê »“—ê Ê«—œ ò‰Ìœ</li>
          </ul>
        </div>
      </template>
      <template #action>
        <n-space justify="center">
          <n-button type="primary" secondary @click="resetForm"
            >«” ⁄·«„ ÃœÌœ</n-button
          >
          <NuxtLink to="/warranty/policies">
            <n-button quaternary>‘—«Ìÿ ê«—«‰ Ì »—‰œÂ«</n-button>
          </NuxtLink>
        </n-space>
      </template>
    </n-result>

    <!-- Õ«·  «Ê·ÌÂ -->
    <n-result
      v-else
      status="info"
      title="Â‰Ê“ Ã” ÃÊÌÌ «‰Ã«„ ‰‘œÂ"
      description="”—Ì«·/IMEI —« Ê«—œ ò‰Ìœ Ê œò„Â «” ⁄·«„ —« »“‰Ìœ."
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import {
  NCard,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NTag,
  NSpace,
  NDivider,
  NResult,
  NAlert,
  NSpin,
  NProgress,
  useMessage,
} from "naive-ui";
import WarrantyStatusSteps from "~/components/WarrantyStatusSteps.vue";
import { useJDate } from "~/composables/useJDate";
import { findWarrantyBySerial } from "~/utils/warrantyClient";

type PageResult = {
  serial: string;
  brand: string;
  model: string;
  warrantySerial?: string;
  trackingSerial?: string;
  durationMonths?: number;
  purchaseDate: Date;
  expireDate: Date;
  warrantyActive: boolean;
  status: string;
  serviceCenter: string;
  updatedAt: Date;
  note?: string;
};

const { j } = useJDate();
const message = useMessage();

/* «⁄œ«œ */
const toEn = (s: string) =>
  s.replace(/[?-?]/g, (d) => "0123456789"["??????????".indexOf(d)]);
const toFa = (n: number | string) =>
  String(n).replace(/\d/g, (d) => "??????????"[+d]);

/* ‰„Ê‰ÂùÂ« */
const sampleSerials = ["SN1234567890", "AS-TUF-F15-001", "356789012345678"];
const fillSample = (s: string) => {
  onSerialInput(s);
  setTimeout(
    () => document.querySelector<HTMLInputElement>(".ltr input")?.focus(),
    0
  );
};

/* ›—„ */
const formRef = ref();
const loading = ref(false);
const hasSearched = ref(false);
const form = reactive({ serial: "", phone: "" });

const normalizeSerial = (v: string) => {
  const en = toEn(v || "");
  return en.toUpperCase();
};
const onSerialInput = (val: string) => {
  form.serial = normalizeSerial(val);
};
const onPhoneInput = (val: string) => {
  form.phone = toEn(val).replace(/[^\d]/g, "").slice(0, 11);
};

const rules = {
  serial: [
    {
      required: true,
      validator: (_: any, v: string) => {
        const s = normalizeSerial(v);
        if (!s) return new Error("‘„«—Â ”—Ì«· ·«“„ «” ");
        if (s.length < 5) return new Error("Õœ«ﬁ· ? ò«—«ò —");
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  phone: [
    {
      validator: (_: any, v: string) => {
        if (!v) return true;
        return /^09\d{9}$/.test(toEn(v)) || new Error("›—„  „Ê»«Ì· „⁄ »— ‰Ì” ");
      },
      trigger: ["input", "blur"],
    },
  ],
};

// Enforce Latin-only characters and no min-length
(rules as any).serial[0].validator = (_: any, v: string) => {
  const s = normalizeSerial(v);
  if (!s) return new Error("Serial is required");
  if (!/^[\x00-\x7F]*$/.test(s))
    return new Error("Only Latin characters allowed");
  return true;
};

/* ‰ ÌÃÂ */
const result = ref<PageResult | null>(null);

const submit = async () => {
  // @ts-ignore
  const ok = await formRef.value?.validate?.().catch(() => false);
  if (!ok) return;

  hasSearched.value = true;
  loading.value = true;
  try {
    const rec = await findWarrantyBySerial(form.serial);
    if (!rec) {
      result.value = null;
      message.warning("—òÊ—œÌ »—«Ì «Ì‰ ”—Ì«· Ì«›  ‰‘œ");
      return;
    }
    const last = rec.status.history[rec.status.history.length - 1];
    result.value = {
      serial: rec.serials?.[0] || "",
      brand: rec.brand,
      model: rec.model,
      warrantySerial: rec.serials?.[1] || "",
      trackingSerial: rec.serials?.[2] || "",
      durationMonths:
        rec.warranty?.unit === "month" ? rec.warranty.value : undefined,
      purchaseDate: new Date(rec.purchaseDate),
      expireDate: new Date(rec.expireDate),
      warrantyActive: new Date(rec.expireDate).getTime() > Date.now(),
      status: rec.status.current,
      serviceCenter: rec.serviceCenter,
      updatedAt: new Date(last?.at || rec.purchaseDate),
      note: last?.note,
    };
  } catch {
    result.value = null;
    message.error("Œÿ« œ— «” ⁄·«„. œÊ»«—Â  ·«‘ ò‰Ìœ.");
  } finally {
    loading.value = false;
  }
};

/* „Õ«”»«  ‰„«Ì‘Ì */
const remainDays = computed(() => {
  if (!result.value) return 0;
  const ms = new Date(result.value.expireDate).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
});
const progressPct = computed(() => {
  if (!result.value) return 0;
  const start = new Date(result.value.purchaseDate).getTime();
  const end = new Date(result.value.expireDate).getTime();
  const now = Date.now();
  const pct = ((now - start) / Math.max(1, end - start)) * 100;
  return Math.min(100, Math.max(0, Math.round(pct)));
});
const statusVisual = computed(() => {
  const active = result.value?.warrantyActive;
  if (active === undefined) {
    return {
      container: "border border-slate-200 bg-slate-50 text-slate-600",
      iconWrapper: "bg-slate-200 text-slate-500",
      icon: "ph:shield-duotone",
      accent: "text-slate-600",
      progress: "#0ea5e9",
    };
  }
  if (active) {
    return {
      container: "border border-emerald-200/80 bg-emerald-50 text-emerald-700",
      iconWrapper: "bg-emerald-500/10 text-emerald-600",
      icon: "ph:shield-check-duotone",
      accent: "text-emerald-600",
      progress: "#10b981",
    };
  }
  return {
    container: "border border-rose-200/80 bg-rose-50 text-rose-700",
    iconWrapper: "bg-rose-500/10 text-rose-600",
    icon: "ph:shield-warning-duotone",
    accent: "text-rose-600",
    progress: "#ef4444",
  };
});
const detailCards = computed(() => {
  const r = result.value;
  if (!r) return [];
  const days = remainDays.value;
  const nearExpiry = days <= 10 && days > 0;
  const expired = !r.warrantyActive || days <= 0;
  const daysTone = expired
    ? "text-rose-600"
    : nearExpiry
    ? "text-amber-600"
    : "text-emerald-600";

  return [
    {
      label: "‰«„ „Õ’Ê·",
      value: r.model || "ó",
      icon: "ph:device-mobile-duotone",
    },
    {
      label: "”—Ì«· œ” ê«Â",
      value: r.serial || "ó",
      icon: "ph:barcode-duotone",
      mono: true,
    },
    {
      label: "”—Ì«· ê«—«‰ Ì",
      value: r.warrantySerial || "ó",
      icon: "ph:identification-badge-duotone",
      mono: true,
    },
    {
      label: "”—Ì«· —ÂêÌ—Ì",
      value: r.trackingSerial || "ó",
      icon: "ph:qrcode-duotone",
      mono: true,
    },
    {
      label: " «—ÌŒ ‘—Ê⁄",
      value: j(r.purchaseDate),
      icon: "ph:calendar-check-duotone",
    },
    {
      label: "Å«Ì«‰ ê«—«‰ Ì",
      value: j(r.expireDate),
      icon: "ph:calendar-dots-duotone",
    },
  ];
});

// removed apiCards; using detailCards only

/* «ò‘‰ùÂ« */
const printPage = () => window.print();
const copyLink = async () => {
  const url = new URL(location.href);
  url.searchParams.set("track", normalizeSerial(form.serial));
  await navigator.clipboard.writeText(url.toString());
  message.success("·Ì‰ò ÅÌêÌ—Ì òÅÌ ‘œ");
};
const enableSms = () => {
  message.success("«⁄·«‰ ÅÌ«„òÌ »—«Ì «Ì‰ ”—Ì«· ›⁄«· ‘œ (œ„Ê)");
};
const resetForm = () => {
  form.serial = "";
  form.phone = "";
  result.value = null;
  hasSearched.value = false;
  // @ts-ignore
  formRef.value?.restoreValidation?.();
};

/* Prefill «“ ?track= */
onMounted(() => {
  const t = new URLSearchParams(location.search).get("track");
  if (t) {
    form.serial = normalizeSerial(t);
    submit();
  }
});

usePageSeo({
  title: "Warranty Check",
});

<style scoped>
.ltr {
  direction: ltr;
  unicode-bidi: plaintext;
  text-align: left;
}
</style>
