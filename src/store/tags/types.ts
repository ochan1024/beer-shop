export interface Tag {
  key: string;
  name: string;
}

export interface TagsState {
  tags: Tag[];
}

export const UPDATE_TAGS = "UPDATE_TAGS";

interface UpdateTagsAction {
  type: typeof UPDATE_TAGS;
  payload: Tag[];
}

export type TagsActionTypes = UpdateTagsAction;
