export interface CartItem {
  id: number;
  count: number;
}

export interface CartState {
  cartItems: CartItem[];
}

export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const EMPTY_CART_ITEMS = "EMPTY_CART_ITEMS";

interface AddCartItem {
  type: typeof ADD_CART_ITEM;
  payload: { id: number; count: number };
}

interface RemoveCartItem {
  type: typeof REMOVE_CART_ITEM;
  payload: { id: number; count: number };
}

interface EmptyCartItems {
  type: typeof EMPTY_CART_ITEMS;
}

export type CartActionTypes = AddCartItem | RemoveCartItem | EmptyCartItems;
