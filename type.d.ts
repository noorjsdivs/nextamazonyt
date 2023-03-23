export interface Products {
  _id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
}
[];

export interface Items {
  _id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
}
export interface StoreItems {
  _id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  image: string;
  isNew: boolean;
  price: number;
  quantity: number;
}
export interface UserInfo {
  _id: string;
  name: string;
  email: string;
}
