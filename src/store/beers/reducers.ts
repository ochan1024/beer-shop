import {
  BeersActionTypes,
  BeersState,
  FETCH_BEERS_FAILURE,
  FETCH_BEERS_REQUEST,
  FETCH_BEERS_SUCCESS,
  INCREASE_LIMIT,
} from './types'

const initialState: BeersState = {
  beers: [],
  isLoadingBeers: false,
  limit: 4
};

const LIMIT_INCREMENT_SIZE = 5;

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
    case INCREASE_LIMIT:
      return {
        ...state,
        limit: state.limit + LIMIT_INCREMENT_SIZE
      };
    default:
      return state;
  }
}
