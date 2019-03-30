import {
  FETCH_PURCHASE_FAILURE,
  FETCH_PURCHASE_REQUEST,
  FETCH_PURCHASE_SUCCESS,
  PurchaseActionTypes,
  PurchaseState,
} from './types'

const initialState: PurchaseState = {
  isLoadingPurchase: false
};

export function purchaseReducer(
  state = initialState,
  action: PurchaseActionTypes
): PurchaseState {
  switch (action.type) {
    case FETCH_PURCHASE_REQUEST:
      return {
        ...state,
        isLoadingPurchase: true
      };
    case FETCH_PURCHASE_SUCCESS:
      return {
        ...state,
        isLoadingPurchase: false
      };
    case FETCH_PURCHASE_FAILURE:
      return {
        ...state,
        isLoadingPurchase: false
      };
    default:
      return state;
  }
}
