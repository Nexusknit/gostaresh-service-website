<template>
  <section class="container mx-auto px-4 py-8" dir="rtl">
    <div class="mb-5 flex items-center justify-between gap-3">
      <h1 class="text-xl font-bold">New Policy</h1>
      <NuxtLink to="/admin/policies" class="text-sky-600 hover:underline text-sm"
        >Back</NuxtLink
      >
    </div>

    <n-card class="rounded-2xl ring-1 ring-slate-200/80 shadow-sm" :bordered="false">
      <n-form :model="form" :rules="rules" ref="formRef" label-placement="left" label-width="140">
        <n-form-item label="Brand" path="brand">
          <n-input v-model:value="form.brand" />
        </n-form-item>
        <n-form-item label="Category" path="category">
          <n-input v-model:value="form.category" />
        </n-form-item>
        <n-form-item label="Product" path="product">
          <n-input v-model:value="form.product" />
        </n-form-item>
        <n-form-item label="Duration Value" path="durationValue">
          <n-input v-model:value="form.durationValue" placeholder="e.g. 12" />
        </n-form-item>
        <n-form-item label="Duration Unit" path="durationUnit">
          <n-select v-model:value="form.durationUnit" :options="unitOptions" clearable />
        </n-form-item>
        <n-form-item label="Conditions" path="conditions">
          <n-input v-model:value="form.conditions" type="textarea" />
        </n-form-item>
        <n-form-item label="Sort Order" path="sortOrder">
          <n-input v-model:value="form.sortOrder" placeholder="Leave empty for auto" />
        </n-form-item>
        <div class="pt-2">
          <n-button type="primary" :loading="submitting" @click="onSubmit">Create</n-button>
        </div>
      </n-form>
    </n-card>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  useMessage,
} from "naive-ui";
import { apiPost } from "@/utils/api";

definePageMeta({
  layout: "admin",
  middleware: ["admin-auth", "admin-permissions"],
  permissions: ["policy.create"],
});

const msg = useMessage();
const formRef = ref<InstanceType<typeof NForm> | null>(null);
const submitting = ref(false);

const form = ref({
  brand: "",
  category: "",
  product: "",
  durationValue: "",
  durationUnit: "month" as string | null,
  conditions: "",
  sortOrder: "",
});

const unitOptions = [
  { label: "Month", value: "month" },
  { label: "Day", value: "day" },
  { label: "None", value: "" },
];

const rules = {
  brand: { required: true, message: "Brand is required", trigger: "blur" },
  category: { required: true, message: "Category is required", trigger: "blur" },
};

function normalizeInt(value: string): number | null {
  const trimmed = String(value || "").trim();
  if (!trimmed) return null;
  const num = Number(trimmed);
  if (!Number.isFinite(num)) return null;
  return Math.trunc(num);
}

async function onSubmit() {
  try {
    await formRef.value?.validate();
  } catch {
    return;
  }
  submitting.value = true;
  try {
    const durationValue = normalizeInt(form.value.durationValue);
    const sortOrder = normalizeInt(form.value.sortOrder);
    await apiPost("/policies", {
      brand: form.value.brand.trim(),
      category: form.value.category.trim(),
      product: form.value.product.trim() || null,
      durationValue,
      durationUnit: form.value.durationUnit || null,
      conditions: form.value.conditions.trim() || null,
      sortOrder,
    });
    msg.success("Created");
    navigateTo("/admin/policies");
  } catch (e: any) {
    msg.error(e?.data?.message || "Create failed");
  } finally {
    submitting.value = false;
  }
}
</script>
