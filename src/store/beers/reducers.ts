import { BeersActionTypes, BeersState, UPDATE_BEERS } from './types'

const initialState: BeersState = {
  beers: []
};

export function beersReducer(
  state = initialState,
  action: BeersActionTypes
): BeersState {
  switch (action.type) {
    case UPDATE_BEERS:
      return {
        beers: action.payload
      };
    default:
      return state;
  }
}
