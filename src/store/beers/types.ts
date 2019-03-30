import { Tag } from '../tags/types'

export interface Beer {
  id: number;
  name: string;
  image?: string;
  tags: Tag[];
  price: number;
  stock: number;
}

export interface BeersState {
  beers: Beer[];
}

export const FETCH_BEERS_REQUEST = "FETCH_BEERS_REQUEST";
export const FETCH_BEERS_SUCCESS = "FETCH_BEERS_SUCCESS";
export const FETCH_BEERS_FAILURE = "FETCH_BEERS_FAILURE";
interface FetchBeersRequest {
  type: typeof FETCH_BEERS_REQUEST;
}

interface FetchBeersSuccess {
  type: typeof FETCH_BEERS_SUCCESS;
  payload: Beer[];
}

interface FetchBeersFailure {
  type: typeof FETCH_BEERS_FAILURE;
  payload: string;
}

export type BeersActionTypes =
  | FetchBeersRequest
  | FetchBeersSuccess
  | FetchBeersFailure;
