import Image from "./image.model";

export interface ProvidedService {
  id: string;
  name: string;
  price: number;
  requiresConsult: boolean;
  description?: string;
  category?: string;
  images?: Image[];
}
