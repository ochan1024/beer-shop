import { Beer } from '../../store/beers/types'
import client from '../../utils/client'
import { API_URL } from '../../utils/constants'

export const beersService = {
  get: () => client.get<Beer[]>(`${API_URL}/beers`)
};
