import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from '..'
import { beersService } from '../../services/beers'
import { Beer, FETCH_BEERS_FAILURE, FETCH_BEERS_REQUEST, FETCH_BEERS_SUCCESS } from './types'

function fetchBeersRequest() {
  return {
    type: FETCH_BEERS_REQUEST
  };
}

function fetchBeersSuccess(newBeers: Beer[]) {
  return {
    type: FETCH_BEERS_SUCCESS,
    payload: newBeers
  };
}

function fetchBeersFailure(message: string) {
  return {
    type: FETCH_BEERS_FAILURE,
    payload: message
  };
}

export const fetchBeers = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async dispatch => {
  try {
    dispatch(fetchBeersRequest());
    const beers = await beersService.get();
    dispatch(fetchBeersSuccess(beers));
  } catch (e) {
    dispatch(fetchBeersFailure(e.message));
  }
};
