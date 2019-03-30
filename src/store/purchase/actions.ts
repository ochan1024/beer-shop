import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from '..'
import { purchaseService } from '../../services/purchase'
import { emptyCartItems } from '../cart/actions'
import { CartItem } from '../cart/types'
import { hideLoader, showLoader } from '../ui/actions'
import { FETCH_PURCHASE_FAILURE, FETCH_PURCHASE_REQUEST, FETCH_PURCHASE_SUCCESS } from './types'

function fetchPurchaseRequest() {
  return {
    type: FETCH_PURCHASE_REQUEST
  };
}

function fetchPurchaseSuccess() {
  return {
    type: FETCH_PURCHASE_SUCCESS
  };
}

function fetchPurchaseFailure(message: string) {
  return {
    type: FETCH_PURCHASE_FAILURE,
    payload: message
  };
}

export const fetchPurchase = (
  cartItems: CartItem[]
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  try {
    dispatch(fetchPurchaseRequest());
    dispatch(showLoader());

    const res = await purchaseService.purchase(cartItems);

    dispatch(fetchPurchaseSuccess());
    dispatch(emptyCartItems());
    dispatch(hideLoader());

    return res;
  } catch (e) {
    dispatch(hideLoader());
    dispatch(fetchPurchaseFailure(e.reason));

    return e;
  }
};
