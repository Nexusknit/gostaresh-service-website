<template>
  <section class="container mx-auto px-4 py-8" dir="rtl">
    <div class="mb-5 flex items-center justify-between gap-3">
      <h1 class="text-xl font-bold">Edit Policy</h1>
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
        <div class="pt-2 flex items-center gap-2">
          <n-button type="primary" :loading="saving" @click="onSubmit">Save</n-button>
          <n-button
            v-if="hasPerm('policy.delete')"
            type="error"
            secondary
            :loading="deleting"
            @click="onDelete"
          >
            Delete
          </n-button>
        </div>
      </n-form>
    </n-card>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import {
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  useMessage,
} from "naive-ui";
import { apiDelete, apiGet, apiPut } from "@/utils/api";

definePageMeta({
  layout: "admin",
  middleware: ["admin-auth", "admin-permissions"],
  permissions: ["policy.update"],
});

const route = useRoute();
const id = String(route.params.id);
const msg = useMessage();
const { hasPerm } = useAccess();

const formRef = ref<InstanceType<typeof NForm> | null>(null);
const saving = ref(false);
const deleting = ref(false);

const form = ref({
  brand: "",
  category: "",
  product: "",
  durationValue: "",
  durationUnit: "" as string | null,
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

async function load() {
  try {
    const data: any = await apiGet(`/policies/${id}`);
    form.value.brand = data?.brand || "";
    form.value.category = data?.category || "";
    form.value.product = data?.product || "";
    form.value.durationValue =
      data?.durationValue === null || data?.durationValue === undefined
        ? ""
        : String(data.durationValue);
    form.value.durationUnit = data?.durationUnit || "";
    form.value.conditions = data?.conditions || "";
    form.value.sortOrder =
      data?.sortOrder === null || data?.sortOrder === undefined
        ? ""
        : String(data.sortOrder);
  } catch (e: any) {
    msg.error(e?.data?.message || "Failed to load policy");
  }
}

onMounted(load);

async function onSubmit() {
  try {
    await formRef.value?.validate();
  } catch {
    return;
  }
  saving.value = true;
  try {
    const durationValue = normalizeInt(form.value.durationValue);
    const sortOrder = normalizeInt(form.value.sortOrder);
    await apiPut(`/policies/${id}`, {
      brand: form.value.brand.trim(),
      category: form.value.category.trim(),
      product: form.value.product.trim() || null,
      durationValue,
      durationUnit: form.value.durationUnit || null,
      conditions: form.value.conditions.trim() || null,
      sortOrder,
    });
    msg.success("Saved");
  } catch (e: any) {
    msg.error(e?.data?.message || "Save failed");
  } finally {
    saving.value = false;
  }
}

async function onDelete() {
  if (!confirm("Delete policy?")) return;
  deleting.value = true;
  try {
    await apiDelete(`/policies/${id}`);
    msg.success("Deleted");
    navigateTo("/admin/policies");
  } catch (e: any) {
    msg.error(e?.data?.message || "Delete failed");
  } finally {
    deleting.value = false;
  }
}
</script>
