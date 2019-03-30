import { BeersActionTypes, BeersState, FETCH_BEERS_SUCCESS } from './types'

const initialState: BeersState = {
  beers: []
};

export function beersReducer(
  state = initialState,
  action: BeersActionTypes
): BeersState {
  switch (action.type) {
    case FETCH_BEERS_SUCCESS:
      return {
        beers: action.payload
      };
    default:
      return state;
  }
}
