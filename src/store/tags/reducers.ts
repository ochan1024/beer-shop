import { TagsActionTypes, TagsState, UPDATE_TAGS } from './types'

const initialState: TagsState = {
  tags: []
};

export function tagsReducer(
  state = initialState,
  action: TagsActionTypes
): TagsState {
  switch (action.type) {
    case UPDATE_TAGS:
      return {
        tags: action.payload
      };
    default:
      return state;
  }
}
