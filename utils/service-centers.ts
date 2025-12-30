import type {
  ServiceCenter,
  ServiceCenterApi,
  ServiceCenterContactItem,
  ServiceCenterMap,
  ServiceCenterServiceItem,
} from "@/types/service-center";
import { publicGet } from "@/utils/publicApi";

type ServiceCenterListResponse = {
  items?: ServiceCenterApi[];
  total?: number;
};

let cachedCenters: ServiceCenter[] | null = null;
let cachedMap: ServiceCenterMap | null = null;

function normalizeServices(
  services?: Array<ServiceCenterServiceItem | string>
): string[] {
  if (!Array.isArray(services)) return [];
  const values: string[] = [];
  const seen = new Set<string>();
  for (const item of services) {
    const raw = typeof item === "string" ? item : item?.value;
    const value = String(raw ?? "").trim();
    if (!value || seen.has(value)) continue;
    seen.add(value);
    values.push(value);
  }
  return values;
}

function normalizeContacts(
  contacts?: ServiceCenterContactItem[]
): ServiceCenter["contact"] {
  const contact: ServiceCenter["contact"] = {
    address: "",
    hours: [],
    phones: [],
  };
  if (!Array.isArray(contacts)) return contact;
  const seenHours = new Set<string>();
  const seenPhones = new Set<string>();

  for (const row of contacts) {
    const key = String(row?.title ?? "").trim().toLowerCase();
    const value = String(row?.value ?? "").trim();
    if (!key || !value) continue;

    if (key === "address") {
      if (!contact.address) contact.address = value;
      continue;
    }
    if (
      key === "hours" ||
      key === "hour" ||
      key === "workinghours" ||
      key === "working_hours"
    ) {
      if (!seenHours.has(value)) {
        seenHours.add(value);
        contact.hours.push(value);
      }
      continue;
    }
    if (key === "phones" || key === "phone" || key === "tel" || key === "mobile") {
      if (!seenPhones.has(value)) {
        seenPhones.add(value);
        contact.phones.push(value);
      }
      continue;
    }
    if (key === "email") {
      if (!contact.email) contact.email = value;
      continue;
    }
    if (key === "maplink" || key === "map_link" || key === "map") {
      if (!contact.mapLink) contact.mapLink = value;
    }
  }

  return contact;
}

function mapServiceCenter(item: ServiceCenterApi): ServiceCenter {
  return {
    id: String(item?.id ?? ""),
    slug: String(item?.slug ?? ""),
    title: String(item?.title ?? item?.slug ?? ""),
    city: item?.city ? String(item.city) : "",
    tagline: item?.tagline ? String(item.tagline) : "",
    summary: item?.summary ? String(item.summary) : "",
    image: item?.image ? String(item.image) : "",
    primary: Boolean(item?.primary),
    contact: normalizeContacts(item?.contacts),
    services: normalizeServices(item?.services),
  };
}

const fetchServiceCenters = async (): Promise<ServiceCenter[]> => {
  const data = await publicGet<ServiceCenterListResponse | ServiceCenterApi[]>(
    "/public/service-centers",
    { params: { limit: 200 } }
  );
  const items = Array.isArray(data)
    ? data
    : Array.isArray(data?.items)
    ? data.items
    : [];
  return items.map(mapServiceCenter);
};

const fetchServiceCenterBySlug = async (
  slug: string
): Promise<ServiceCenter | undefined> => {
  const key = String(slug || "").trim();
  if (!key) return undefined;
  const item = await publicGet<ServiceCenterApi>(
    `/public/service-centers/${encodeURIComponent(key)}`
  );
  if (!item) return undefined;
  return mapServiceCenter(item);
};

const loadCenters = async (): Promise<ServiceCenter[]> => {
  if (cachedCenters) {
    return cachedCenters;
  }
  cachedCenters = await fetchServiceCenters();
  return cachedCenters;
};

export const getServiceCenters = async (): Promise<ServiceCenter[]> => {
  const centers = await loadCenters();
  return centers
    .slice()
    .sort((a, b) => a.city.localeCompare(b.city, "fa"));
};

export const getServiceCenterMap = async (): Promise<ServiceCenterMap> => {
  if (cachedMap) {
    return cachedMap;
  }
  const centers = await loadCenters();
  cachedMap = centers.reduce<ServiceCenterMap>((acc, item) => {
    acc[item.slug] = item;
    return acc;
  }, {} as ServiceCenterMap);
  return cachedMap;
};

export const findServiceCenter = async (
  slug: string
): Promise<ServiceCenter | undefined> => {
  if (cachedMap && cachedMap[slug]) {
    return cachedMap[slug];
  }
  try {
    const item = await fetchServiceCenterBySlug(slug);
    if (item) {
      if (!cachedMap) cachedMap = {} as ServiceCenterMap;
      cachedMap[item.slug] = item;
      if (cachedCenters && !cachedCenters.some((c) => c.slug === item.slug)) {
        cachedCenters = [...cachedCenters, item];
      }
      return item;
    }
  } catch {
    // ignore and fall back to cached list
  }
  const map = await getServiceCenterMap();
  return map[slug];
};

export const getPrimaryCenters = async (
  limit = 3
): Promise<ServiceCenter[]> => {
  const centers = await getServiceCenters();
  const highlighted = centers.filter((center) => center.primary);
  if (highlighted.length >= limit) {
    return highlighted.slice(0, limit);
  }
  const fallback = centers.filter((center) => !center.primary);
  return [...highlighted, ...fallback].slice(0, limit);
};
