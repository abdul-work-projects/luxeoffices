export type LocationTag =
  | 'bur-dubai'
  | 'deira'
  | 'sheikh-zayed-road'
  | 'business-bay'
  | 'port-saeed'
  | 'oud-metha'
  | 'the-greens';

export const locationLabels: Record<LocationTag, string> = {
  'bur-dubai': 'Bur Dubai',
  'deira': 'Deira',
  'sheikh-zayed-road': 'Sheikh Zayed Road',
  'business-bay': 'Business Bay',
  'port-saeed': 'Port Saeed',
  'oud-metha': 'Oud Metha',
  'the-greens': 'The Greens',
};

export interface Space {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  location: string;
  locationTag: LocationTag;
  pricePerYear: number;
  images: string[];
  matterportId?: string;
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
