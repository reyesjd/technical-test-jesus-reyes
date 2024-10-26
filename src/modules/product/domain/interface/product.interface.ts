export interface IProduct {
  id?: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
  status?: boolean;
}
