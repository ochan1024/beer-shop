export interface PurchaseState {
  isLoadingPurchase: boolean;
}

export const FETCH_PURCHASE_REQUEST = "FETCH_PURCHASE_REQUEST";
export const FETCH_PURCHASE_SUCCESS = "FETCH_PURCHASE_SUCCESS";
export const FETCH_PURCHASE_FAILURE = "FETCH_PURCHASE_FAILURE";

interface FetchPurchaseRequest {
  type: typeof FETCH_PURCHASE_REQUEST;
}

interface FetchPurchaseSuccess {
  type: typeof FETCH_PURCHASE_SUCCESS;
}

interface FetchPurchaseFailure {
  type: typeof FETCH_PURCHASE_FAILURE;
}

export type PurchaseActionTypes =
  | FetchPurchaseRequest
  | FetchPurchaseSuccess
  | FetchPurchaseFailure;
