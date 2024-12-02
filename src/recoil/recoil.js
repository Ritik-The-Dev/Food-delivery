import { atom } from "recoil";

export const restaurants = atom({
  key: "restaurants",
  default: [],
});

export const userData = atom({
  key: "userData",
  default: {},
});

export const CartItems = atom({
  key: "cartItems",
  default: [],
});

export const sharedCart = atom({
  key: "sharedCart",
  default: false,
});
