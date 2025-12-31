<template>
  <section class="container mx-auto px-4 py-8" dir="rtl">
    <div class="mb-5 flex items-center justify-between gap-3">
      <h1 class="text-xl font-bold">Policies</h1>
      <NuxtLink
        v-if="hasPerm('policy.create')"
        to="/admin/policies/create"
        class="inline-flex items-center gap-2 rounded-xl bg-sky-600 text-white px-3 py-2 text-sm"
      >
        <Icon name="ph:plus" /> New Policy
      </NuxtLink>
    </div>

    <n-card class="rounded-2xl ring-1 ring-slate-200/80 shadow-sm mb-4" :bordered="false">
      <div class="flex flex-wrap items-center gap-3">
        <n-input v-model:value="q" placeholder="Search..." class="w-64" clearable size="large">
          <template #prefix><Icon name="ph:magnifying-glass-duotone" /></template>
        </n-input>
        <n-input v-model:value="brand" placeholder="Brand" class="w-44" clearable size="large" />
        <n-input v-model:value="category" placeholder="Category" class="w-44" clearable size="large" />
        <n-input v-model:value="product" placeholder="Product" class="w-44" clearable size="large" />
      </div>
    </n-card>

    <n-data-table
      :columns="columns"
      :data="items"
      :loading="pending"
      :bordered="false"
      class="rounded-2xl ring-1 ring-slate-200 overflow-hidden"
    />

    <div class="mt-4 flex items-center justify-between">
      <div class="text-sm text-slate-600">Total: {{ total }}</div>
      <div class="flex items-center gap-2">
        <n-button size="small" :disabled="offset === 0" @click="prev">Prev</n-button>
        <n-button size="small" :disabled="offset + limit >= total" @click="next">Next</n-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, h, ref, watch } from "vue";
import { NButton, NCard, NDataTable, NInput, useMessage } from "naive-ui";
import { apiDelete, apiGet } from "@/utils/api";

definePageMeta({
  layout: "admin",
  middleware: ["admin-auth", "admin-permissions"],
  permissions: ["policy.read"],
});

const msg = useMessage();
const { hasPerm } = useAccess();

const q = ref("");
const brand = ref("");
const category = ref("");
const product = ref("");
const limit = ref(10);
const offset = ref(0);
const items = ref<any[]>([]);
const total = ref(0);
const pending = ref(false);

async function fetchList() {
  pending.value = true;
  try {
    const data: any = await apiGet("/policies", {
      params: {
        q: q.value || undefined,
        brand: brand.value || undefined,
        category: category.value || undefined,
        product: product.value || undefined,
        limit: limit.value,
        offset: offset.value,
      },
    });
    items.value = Array.isArray(data?.items) ? data.items : [];
    total.value =
      typeof data?.total === "number" ? data.total : items.value.length;
  } finally {
    pending.value = false;
  }
}

function prev() {
  offset.value = Math.max(0, offset.value - limit.value);
}

function next() {
  if (offset.value + limit.value < total.value) {
    offset.value += limit.value;
  }
}

watch([q, brand, category, product, limit, offset], fetchList, {
  immediate: true,
});

function formatDuration(row: any) {
  const value =
    typeof row?.durationValue === "number"
      ? row.durationValue
      : row?.durationValue === null || row?.durationValue === undefined
      ? null
      : Number(row.durationValue);
  if (!Number.isFinite(value)) return "-";
  const unit =
    row?.durationUnit === "day"
      ? "day"
      : row?.durationUnit === "month"
      ? "month"
      : "";
  return unit ? `${value} ${unit}` : String(value);
}

function onEdit(row: any) {
  if (!hasPerm("policy.update")) return;
  navigateTo(`/admin/policies/${row.id}`);
}

async function onDelete(row: any) {
  if (!hasPerm("policy.delete")) return;
  if (!confirm("Delete policy?")) return;
  try {
    await apiDelete(`/policies/${row.id}`);
    msg.success("Deleted");
    fetchList();
  } catch (e: any) {
    msg.error(e?.data?.message || "Delete failed");
  }
}

const columns = computed(() => {
  const canEdit = hasPerm("policy.update");
  const canDelete = hasPerm("policy.delete");

  const baseColumns = [
    { title: "Brand", key: "brand" },
    { title: "Category", key: "category" },
    {
      title: "Product",
      key: "product",
      render: (row: any) =>
        row?.product ? row.product : h("span", { class: "text-slate-400" }, "-"),
    },
    {
      title: "Duration",
      key: "duration",
      render: (row: any) => formatDuration(row),
    },
    {
      title: "Sort",
      key: "sortOrder",
      render: (row: any) =>
        row?.sortOrder ?? h("span", { class: "text-slate-400" }, "-"),
    },
    {
      title: "Conditions",
      key: "conditions",
      render: (row: any) => {
        const text = String(row?.conditions || "").trim();
        if (!text) return h("span", { class: "text-slate-400" }, "-");
        const short = text.length > 80 ? `${text.slice(0, 80)}...` : text;
        return h("span", { class: "text-xs text-slate-600" }, short);
      },
    },
  ];

  if (canEdit || canDelete) {
    baseColumns.push({
      title: "Actions",
      key: "actions",
      render(row: any) {
        const buttons = [];
        if (canEdit) {
          buttons.push(
            h(
              NButton,
              { size: "small", onClick: () => onEdit(row) },
              { default: () => "Edit" }
            )
          );
        }
        if (canDelete) {
          buttons.push(
            h(
              NButton,
              {
                size: "small",
                type: "error",
                secondary: true,
                onClick: () => onDelete(row),
              },
              { default: () => "Delete" }
            )
          );
        }
        return buttons.length
          ? h("div", { class: "flex items-center gap-2" }, buttons)
          : null;
      },
    });
  }

  return baseColumns;
});
</script>
