// utils/warrantyClient.ts
export type WarrantyRecord = {
  serials: string[];
  brand: string;
  model: string;
  purchaseDate: string; // ISO (YYYY-MM-DD)
  expireDate: string; // ISO
  warranty: { value: number; unit: "month" | "day" };
  companyService: string;
  serviceCenter: string;
  status: {
    current: string;
    history: { key: string; at: string; note?: string }[];
  };
  policyRef?: { brand: string; category: string };
};

const toEn = (s: string) =>
  s.replace(/[??-??]/g, (d) => "0123456789"["?????ý??????????????".indexOf(d)]);
const normSerial = (v: string) =>
  toEn(v)
    .replace(/[^A-Za-z0-9-]/g, "")
    .toUpperCase();

export async function findWarrantyBySerial(
  serial: string
): Promise<WarrantyRecord | null> {
  const key = normSerial(serial);
  const { public: pub } =
    typeof useRuntimeConfig === "function"
      ? useRuntimeConfig()
      : ({ public: {} } as any);
  const rawBase =
    (pub as any).warrantyApiBase || (pub as any).apiBase || "/api/v1";
  const base = (() => {
    const cleaned = String(rawBase || "").replace(/\/$/, "");
    try {
      if (process.client) {
        return new URL(cleaned, window.location.origin)
          .toString()
          .replace(/\/$/, "");
      }
    } catch {
      /* ignore */
    }
    return cleaned;
  })();

  // Try backend API first
  try {
    type RemoteItem = {
      warrantySerial: string;
      productName: string;
      productSerial: string;
      duration: number;
      startDate: string; // ISO
      endDate: string; // ISO
      trackingSerial?: string;
      warrantySerialName?: string; // e.g. center name
      companyService?: string;
      warrantyName?: string; // e.g. brand/provider name
    };

    const remote = await $fetch<RemoteItem[]>(
      `${base.replace(/\/$/, "")}/warranty/inquiry/${encodeURIComponent(key)}`
    );

    if (Array.isArray(remote) && remote.length > 0) {
      const r = remote[0];
      const serials = [r.productSerial, r.warrantySerial, r.trackingSerial]
        .filter((x): x is string => Boolean(x))
        .map(normSerial);

      const mapped: WarrantyRecord = {
        serials,
        brand: "",
        model: r.productName || "",
        purchaseDate: r.startDate,
        expireDate: r.endDate,
        warranty: { value: r.duration ?? 0, unit: "month" },
        companyService: r.warrantySerialName || "",
        serviceCenter: r.warrantyName || "",
        status: {
          current: "registered",
          history: [
            r.startDate
              ? { key: "registered", at: r.startDate, note: "È?È?Ì?È? Ï?È?È?È?????å?" }
              : undefined,
          ].filter(Boolean) as { key: string; at: string; note?: string }[],
        },
        policyRef: undefined,
      };

      return mapped;
    }
  } catch {
    // ignore and fall back to null
  }

  return null;
}
