import { ADD_CART_ITEM, CartActionTypes, CartState, EMPTY_CART_ITEMS, REMOVE_CART_ITEM } from './types'

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

      const newCartItems = [...state.cartItems];
      const index = newCartItems.findIndex(({ id }) => id === itemId);

      if (index < 0) {
        newCartItems.push({
          id: itemId,
          count: addCount
        });
      } else {
        const prevCount = newCartItems[index].count;
        newCartItems[index].count = prevCount + addCount;
      }

      return {
        ...state,
        cartItems: newCartItems
      };
    }

    case REMOVE_CART_ITEM: {
      const { id: itemId, count: removeCount } = action.payload;

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

    case EMPTY_CART_ITEMS: {
      return {
        ...state,
        cartItems: []
      };
    }

    default:
      return state;
  }
}
