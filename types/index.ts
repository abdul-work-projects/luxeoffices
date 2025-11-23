export interface Space {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  location: string;
  pricePerHour: number;
  pricePerDay: number;
  images: string[];
  matterportId: string;
  amenities: string[];
  capacity?: number;
  size?: number;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  spaceId?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
