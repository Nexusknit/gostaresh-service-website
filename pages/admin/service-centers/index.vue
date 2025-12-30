<template>
  <section class="container mx-auto px-4 py-8" dir="rtl">
    <div class="mb-5 flex items-center justify-between gap-3">
      <h1 class="text-xl font-bold">Service Centers</h1>
      <NuxtLink
        v-if="hasPerm('service_center.create')"
        to="/admin/service-centers/create"
        class="inline-flex items-center gap-2 rounded-xl bg-sky-600 text-white px-3 py-2 text-sm"
      >
        <Icon name="ph:plus" /> New Center
      </NuxtLink>
    </div>

    <n-card class="rounded-2xl ring-1 ring-slate-200/80 shadow-sm mb-4" :bordered="false">
      <div class="flex flex-wrap items-center gap-3">
        <n-input v-model:value="q" placeholder="Search..." class="w-64" clearable size="large">
          <template #prefix><Icon name="ph:magnifying-glass-duotone" /></template>
        </n-input>
        <n-input v-model:value="city" placeholder="City" class="w-48" clearable size="large" />
        <n-select v-model:value="primaryFilter" :options="primaryOptions" class="w-44" size="large" />
        <n-select v-model:value="activeFilter" :options="activeOptions" class="w-44" size="large" />
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
import {
  NButton,
  NCard,
  NDataTable,
  NInput,
  NSelect,
  useMessage,
} from "naive-ui";
import { apiDelete, apiGet } from "@/utils/api";

definePageMeta({
  layout: "admin",
  middleware: ["admin-auth", "admin-permissions"],
  permissions: ["service_center.read"],
});

const msg = useMessage();
const { hasPerm } = useAccess();

const q = ref("");
const city = ref("");
const primaryFilter = ref("all");
const activeFilter = ref("all");
const limit = ref(10);
const offset = ref(0);
const items = ref<any[]>([]);
const total = ref(0);
const pending = ref(false);

const primaryOptions = [
  { label: "All", value: "all" },
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
];
const activeOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

async function fetchList() {
  pending.value = true;
  try {
    const params: Record<string, any> = {
      q: q.value || undefined,
      city: city.value || undefined,
      limit: limit.value,
      offset: offset.value,
    };
    if (primaryFilter.value === "primary") params.primary = true;
    if (primaryFilter.value === "secondary") params.primary = false;
    if (activeFilter.value === "active") params.isActive = true;
    if (activeFilter.value === "inactive") params.isActive = false;

    const data: any = await apiGet("/service-centers", { params });
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

watch([q, city, primaryFilter, activeFilter, limit, offset], fetchList, {
  immediate: true,
});

function onEdit(row: any) {
  if (!hasPerm("service_center.update")) return;
  navigateTo(`/admin/service-centers/${row.id}`);
}

async function onDelete(row: any) {
  if (!hasPerm("service_center.delete")) return;
  if (!confirm("Delete service center?")) return;
  try {
    await apiDelete(`/service-centers/${row.id}`);
    msg.success("Deleted");
    fetchList();
  } catch (e: any) {
    msg.error(e?.data?.message || "Delete failed");
  }
}

const columns = computed(() => {
  const canEdit = hasPerm("service_center.update");
  const canDelete = hasPerm("service_center.delete");

  const baseColumns = [
    { title: "Title", key: "title" },
    { title: "City", key: "city" },
    { title: "Slug", key: "slug" },
    {
      title: "Primary",
      key: "primary",
      render: (row: any) => (row.primary ? "Yes" : "No"),
    },
    {
      title: "Active",
      key: "isActive",
      render: (row: any) => (row.isActive ? "Active" : "Inactive"),
    },
    {
      title: "Services",
      key: "services",
      render: (row: any) =>
        Array.isArray(row?.services) ? row.services.length : 0,
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
