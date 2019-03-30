import { Tag } from '../../store/tags/types'
import client from '../../utils/client'
import { API_URL } from '../../utils/constants'

export const tagsService = {
  get: () => client.get<Tag[]>(`${API_URL}/tags`)
};
