import { Beer, UPDATE_BEERS } from './types'

export function updateBeers(newBeers: Beer[]) {
  return {
    type: UPDATE_BEERS,
    payload: newBeers
  };
}
