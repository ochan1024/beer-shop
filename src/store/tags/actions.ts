import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from '..'
import { tagsService } from '../../services/tags'
import { FETCH_TAGS_FAILURE, FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS, Tag, TOGGLE_USER_SELECTED_TAG } from './types'

function fetchTagsRequest() {
  return {
    type: FETCH_TAGS_REQUEST
  };
}

function fetchTagsSuccess(newTags: Tag[]) {
  return {
    type: FETCH_TAGS_SUCCESS,
    payload: newTags
  };
}

function fetchTagsFailure(message: string) {
  return {
    type: FETCH_TAGS_FAILURE,
    payload: message
  };
}

export const fetchTags = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async dispatch => {
  try {
    dispatch(fetchTagsRequest());
    const Tags = await tagsService.get();
    dispatch(fetchTagsSuccess(Tags));
  } catch (e) {
    dispatch(fetchTagsFailure(e.message));
  }
};

export function toggleUserSelectedTag(tagKey: string) {
  return {
    type: TOGGLE_USER_SELECTED_TAG,
    payload: tagKey
  };
}
