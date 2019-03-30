import { CartItem } from '../../store/cart/types'
import client from '../../utils/client'
import { API_URL } from '../../utils/constants'

export const purchaseService = {
  purchase: (items: CartItem[]) =>
    client.post<{ totalCount: number; totalPrice: number }>(
      `${API_URL}/purchase`,
      items
    )
};
