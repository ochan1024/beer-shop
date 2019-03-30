import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './types'

export function addCartItem(id: number, count: number) {
  return {
    type: ADD_CART_ITEM,
    payload: {
      id,
      count
    }
  };
}

export function removeCartItem(id: number, count: number) {
  return {
    type: REMOVE_CART_ITEM,
    payload: {
      id,
      count
    }
  };
}
