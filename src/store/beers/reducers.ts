import { BeersActionTypes, BeersState, FETCH_BEERS_FAILURE, FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCESS } from './types'

const initialState: BeersState = {
  beers: [],
  isLoadingBeers: false
};

export function beersReducer(
  state = initialState,
  action: BeersActionTypes
): BeersState {
  switch (action.type) {
    case FETCH_BEERS_REQUEST:
      return {
        ...state,
        isLoadingBeers: true
      };
    case FETCH_BEERS_SUCCESS:
      return {
        ...state,
        beers: action.payload,
        isLoadingBeers: false
      };
    case FETCH_BEERS_FAILURE:
      return {
        ...state,
        isLoadingBeers: false
      };
    default:
      return state;
  }
}
