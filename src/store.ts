import { proxy } from "valtio";

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Item {
  id: number;
  name: string;
  price: number;
}

export interface AppState {
  items: Item[];
  user: User | null;
  cart: Item[];
}

export const state = proxy<AppState>({ items: [], user: null, cart: [] });
