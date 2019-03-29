import { Tag } from '../tags/types'

export interface Beer {
  id: number;
  name: string;
  image: string;
  tags: Tag[];
  price: number;
  stock: number;
}

export interface BeersState {
  beers: Beer[];
}

export const UPDATE_BEERS = "UPDATE_BEERS";

interface UpdateBeersAction {
  type: typeof UPDATE_BEERS;
  payload: Beer[];
}

export type BeersActionTypes = UpdateBeersAction;
