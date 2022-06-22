import Image from "./image.model";

export interface OwnerData {
  name: string;
  about?: string;
  images?: Image[];
  certifications?: Certification[];
}

export interface Certification {
  name: string;
  from: string;
  obtained: Date;
}
