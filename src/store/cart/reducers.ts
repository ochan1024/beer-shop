import store from '..'
import { ADD_CART_ITEM, CartActionTypes, CartState, REMOVE_CART_ITEM } from './types'

const initialState: CartState = {
  cartItems: []
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_CART_ITEM: {
      const { id: itemId, count: addCount } = action.payload;

      const { beers } = store.getState().beersReducer;
      const beer = beers.find(({ id }) => id === itemId);
      if (!beer) {
        // invalid item id
        return state;
      }

      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex(({ id }) => id === itemId);

      if (index < 0) {
        newCartItems.push({
          id: itemId,
          count: addCount
        });
      } else {
        const prevCount = newCartItems[index].count;
        const newCount =
          prevCount + addCount > beer.stock ? beer.stock : prevCount + addCount;
        newCartItems[index].count = newCount;
      }

      return {
        ...state,
        cartItems: newCartItems
      };
    }

    case REMOVE_CART_ITEM: {
      const { id: itemId, count: removeCount } = action.payload;

      const { beers } = store.getState().beersReducer;
      const beer = beers.find(({ id }) => id === itemId);
      if (!beer) {
        // invalid item id
        return state;
      }

      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex(({ id }) => id === itemId);

      if (index < 0) {
        return state;
      }

      const prevCount = newCartItems[index].count;
      const newCount = prevCount - removeCount;

      if (newCount <= 0) {
        newCartItems.splice(index, 1);
      } else {
        newCartItems[index].count = newCount;
      }

      return {
        ...state,
        cartItems: newCartItems
      };
    }

    default:
      return state;
  }
}
