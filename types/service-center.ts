export type ServiceCenter = {
  id: string;
  slug: string;
  title: string;
  city: string;
  tagline: string;
  summary: string;
  image: string;
  primary?: boolean;
  contact: {
    address: string;
    hours: string[];
    phones: string[];
    email?: string;
    mapLink?: string;
  };
  services: string[];
};

export type ServiceCenterMap = Record<string, ServiceCenter>;

export type ServiceCenterContactItem = {
  id?: string;
  title: string;
  value: string;
};

export type ServiceCenterServiceItem = {
  id?: string;
  value?: string;
};

export type ServiceCenterApi = {
  id: string;
  slug: string;
  title: string;
  city?: string | null;
  tagline?: string | null;
  summary?: string | null;
  image?: string | null;
  primary?: boolean;
  isActive?: boolean;
  contacts?: ServiceCenterContactItem[];
  services?: Array<ServiceCenterServiceItem | string>;
};
