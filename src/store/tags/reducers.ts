import omit from '../../utils/omit'
import {
  FETCH_TAGS_FAILURE,
  FETCH_TAGS_REQUEST,
  FETCH_TAGS_SUCCESS,
  TagsActionTypes,
  TagsState,
  TOGGLE_USER_SELECTED_TAG,
} from './types'

const initialState: TagsState = {
  tags: [],
  userSelectedTags: {},
  isLoadingTags: false
};

export function tagsReducer(
  state = initialState,
  action: TagsActionTypes
): TagsState {
  switch (action.type) {
    case FETCH_TAGS_REQUEST:
      return {
        ...state,
        isLoadingTags: true
      };
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        isLoadingTags: false
      };
    case FETCH_TAGS_FAILURE:
      return {
        ...state,
        isLoadingTags: false
      };

    case TOGGLE_USER_SELECTED_TAG: {
      const isIncluded = state.userSelectedTags[action.payload];
      if (isIncluded) {
        return {
          ...state,
          userSelectedTags: omit(state.userSelectedTags, action.payload)
        };
      }
      return {
        ...state,
        userSelectedTags: {
          ...state.userSelectedTags,
          [action.payload]: true
        }
      };
    }

    default:
      return state;
  }
}
