export interface Tag {
  key: string;
  name: string;
}

export interface TagsState {
  tags: Tag[];
  userSelectedTags: { [key: string]: boolean };
  isLoadingTags: boolean;
}

export const FETCH_TAGS_REQUEST = "FETCH_TAGS_REQUEST";
export const FETCH_TAGS_SUCCESS = "FETCH_TAGS_SUCCESS";
export const FETCH_TAGS_FAILURE = "FETCH_TAGS_FAILURE";

export const TOGGLE_USER_SELECTED_TAG = "TOGGLE_USER_SELECTED_TAG";

interface FetchTagsRequest {
  type: typeof FETCH_TAGS_REQUEST;
}

interface FetchTagsSuccess {
  type: typeof FETCH_TAGS_SUCCESS;
  payload: Tag[];
}

interface FetchTagsFailure {
  type: typeof FETCH_TAGS_FAILURE;
  payload: string;
}

interface ToggleUserSelectedTag {
  type: typeof TOGGLE_USER_SELECTED_TAG;
  payload: string;
}

export type TagsActionTypes =
  | FetchTagsRequest
  | FetchTagsSuccess
  | FetchTagsFailure
  | ToggleUserSelectedTag;
