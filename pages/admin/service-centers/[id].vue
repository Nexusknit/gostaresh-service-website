<template>
  <section class="container mx-auto px-4 py-8" dir="rtl">
    <div class="mb-5 flex items-center justify-between gap-3">
      <h1 class="text-xl font-bold">Edit Service Center</h1>
      <NuxtLink to="/admin/service-centers" class="text-sky-600 hover:underline text-sm"
        >Back</NuxtLink
      >
    </div>

    <n-card class="rounded-2xl ring-1 ring-slate-200/80 shadow-sm" :bordered="false">
      <template #header>
        <div class="flex items-center justify-between">
          <div class="text-slate-700">{{ form.title || "Service Center" }}</div>
          <n-button v-if="canDelete" type="error" secondary @click="onDelete" :loading="deleting">
            Delete
          </n-button>
        </div>
      </template>
      <n-form :model="form" :rules="rules" ref="formRef" label-placement="left" label-width="140">
        <n-form-item label="Title" path="title">
          <n-input v-model:value="form.title" :disabled="!canUpdate" />
        </n-form-item>
        <n-form-item label="Slug" path="slug">
          <n-input v-model:value="form.slug" :disabled="!canUpdate" />
        </n-form-item>
        <n-form-item label="City" path="city">
          <n-input v-model:value="form.city" :disabled="!canUpdate" />
        </n-form-item>
        <n-form-item label="Tagline" path="tagline">
          <n-input v-model:value="form.tagline" :disabled="!canUpdate" />
        </n-form-item>
        <n-form-item label="Summary" path="summary">
          <n-input v-model:value="form.summary" type="textarea" :disabled="!canUpdate" />
        </n-form-item>
        <n-form-item label="Image" path="image">
          <AdminImageUploader v-model="form.image" scope="service-centers" />
        </n-form-item>
        <n-form-item label="Primary">
          <n-switch v-model:value="form.primary" :disabled="!canUpdate" />
        </n-form-item>
        <n-form-item label="Active">
          <n-switch v-model:value="form.isActive" :disabled="!canUpdate" />
        </n-form-item>

        <n-form-item label="Contacts">
          <div class="w-full space-y-2">
            <div
              v-for="(row, index) in form.contacts"
              :key="index"
              class="flex flex-wrap items-center gap-2"
            >
              <n-input
                v-model:value="row.title"
                placeholder="Key (address, phones...)"
                class="w-44"
                :disabled="!canUpdate"
              />
              <n-input
                v-model:value="row.value"
                placeholder="Value"
                class="flex-1 min-w-[220px]"
                :disabled="!canUpdate"
              />
              <n-button
                v-if="canUpdate"
                size="small"
                secondary
                type="error"
                @click="removeContact(index)"
              >
                Remove
              </n-button>
            </div>
            <n-button v-if="canUpdate" size="small" @click="addContact">Add contact</n-button>
          </div>
        </n-form-item>

        <n-form-item label="Services">
          <div class="w-full space-y-2">
            <div class="flex flex-wrap items-center gap-2">
              <n-input
                v-model:value="serviceInput"
                placeholder="Add service"
                class="flex-1 min-w-[220px]"
                :disabled="!canUpdate"
                @keydown.enter.prevent="addService"
              />
              <n-button v-if="canUpdate" @click="addService">Add</n-button>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(service, index) in form.services"
                :key="`${service}-${index}`"
                class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
              >
                {{ service }}
                <button
                  v-if="canUpdate"
                  type="button"
                  class="text-slate-400 hover:text-red-500"
                  @click="removeService(index)"
                  aria-label="Remove"
                >
                  ×
                </button>
              </span>
            </div>
          </div>
        </n-form-item>

        <div class="pt-2">
          <n-button v-if="canUpdate" type="primary" :loading="saving" @click="onSubmit">
            Save
          </n-button>
        </div>
      </n-form>
    </n-card>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import {
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NSwitch,
  useMessage,
} from "naive-ui";
import AdminImageUploader from "@/components/AdminImageUploader.vue";
import { apiDelete, apiGet, apiPut } from "@/utils/api";

definePageMeta({
  layout: "admin",
  middleware: ["admin-auth", "admin-permissions"],
  permissions: ["service_center.read"],
});

const { hasPerm } = useAccess();
const canUpdate = computed(() => hasPerm("service_center.update"));
const canDelete = computed(() => hasPerm("service_center.delete"));

const route = useRoute();
const id = String(route.params.id);
const msg = useMessage();
const formRef = ref<InstanceType<typeof NForm> | null>(null);
const saving = ref(false);
const deleting = ref(false);
const serviceInput = ref("");

const form = ref({
  title: "",
  slug: "",
  city: "",
  tagline: "",
  summary: "",
  image: "",
  primary: false,
  isActive: true,
  contacts: [] as Array<{ title: string; value: string }>,
  services: [] as string[],
});

const rules = {
  title: { required: true, message: "Title is required", trigger: "blur" },
};

onMounted(load);

async function load() {
  try {
    const data: any = await apiGet(`/service-centers/${id}`);
    form.value.title = data?.title || "";
    form.value.slug = data?.slug || "";
    form.value.city = data?.city || "";
    form.value.tagline = data?.tagline || "";
    form.value.summary = data?.summary || "";
    form.value.image = data?.image || "";
    form.value.primary = Boolean(data?.primary);
    form.value.isActive = Boolean(data?.isActive);
    form.value.contacts = Array.isArray(data?.contacts)
      ? data.contacts.map((row: any) => ({
          title: String(row?.title ?? ""),
          value: String(row?.value ?? ""),
        }))
      : [];
    form.value.services = Array.isArray(data?.services)
      ? data.services
          .map((row: any) => (typeof row === "string" ? row : row?.value))
          .filter((v: any) => typeof v === "string" && v.trim())
      : [];
  } catch {
    msg.error("Failed to load service center");
  }
}

function addContact() {
  form.value.contacts.push({ title: "", value: "" });
}

function removeContact(index: number) {
  form.value.contacts.splice(index, 1);
}

function addService() {
  if (!canUpdate.value) return;
  const value = serviceInput.value.trim();
  if (!value) return;
  if (!form.value.services.includes(value)) {
    form.value.services.push(value);
  }
  serviceInput.value = "";
}

function removeService(index: number) {
  form.value.services.splice(index, 1);
}

async function onSubmit() {
  if (!canUpdate.value) return;
  try {
    await formRef.value?.validate();
  } catch {
    return;
  }
  saving.value = true;
  try {
    const contacts = form.value.contacts
      .map((row) => ({
        title: row.title.trim(),
        value: String(row.value ?? "").trim(),
      }))
      .filter((row) => row.title);
    const services = form.value.services
      .map((s) => s.trim())
      .filter(Boolean);

    await apiPut(`/service-centers/${id}`, {
      title: form.value.title,
      slug: form.value.slug || undefined,
      city: form.value.city || undefined,
      tagline: form.value.tagline || undefined,
      summary: form.value.summary || undefined,
      image: form.value.image || undefined,
      primary: form.value.primary,
      isActive: form.value.isActive,
      contacts: contacts.length ? contacts : undefined,
      services: services.length ? services : undefined,
    });
    msg.success("Saved");
  } catch (e: any) {
    msg.error(e?.data?.message || "Save failed");
  } finally {
    saving.value = false;
  }
}

async function onDelete() {
  if (!canDelete.value) return;
  if (!confirm("Delete service center?")) return;
  deleting.value = true;
  try {
    await apiDelete(`/service-centers/${id}`);
    msg.success("Deleted");
    navigateTo("/admin/service-centers");
  } catch (e: any) {
    msg.error(e?.data?.message || "Delete failed");
  } finally {
    deleting.value = false;
  }
}
</script>
