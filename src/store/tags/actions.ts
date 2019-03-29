import { Tag, UPDATE_TAGS } from './types'

export function updateTags(newTags: Tag[]) {
  return {
    type: UPDATE_TAGS,
    payload: newTags
  };
}
