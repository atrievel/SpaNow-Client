import Image from "./image.model";

export interface CompanyData {
  name: string;
  about: string;
  phone: string;
  hours?: Hours[];
  images?: Image[];
  location?: Location;
};

export interface Hours {
  day: string;
  open: string;
  close: string;
}

export interface Location {
  address: Address;
  geolocation: Coordinate;
}

export interface Address {
  city: string;
  state: string;
  street: string;
  zip: string;
}

export interface Coordinate {
  latitude: string;
  longitude: string;
}
