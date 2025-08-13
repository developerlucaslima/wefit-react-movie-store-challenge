import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { CartState } from './cart-store-types'

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},

      addItem: (item, quantity = 1) =>
        set(state => {
          const existing = state.items[item.id]
          const newQty = (existing?.quantity ?? 0) + quantity
          return { items: { ...state.items, [item.id]: { ...item, quantity: newQty } } }
        }),

      incrementItem: (id, amount = 1) =>
        set(state => {
          const existing = state.items[id]
          if (!existing) return state
          return { items: { ...state.items, [id]: { ...existing, quantity: existing.quantity + amount } } }
        }),

      decrementItem: (id, amount = 1) =>
        set(state => {
          const existing = state.items[id]
          if (!existing) return state
          const newQty = existing.quantity - amount
          if (newQty <= 0) {
            const { [id]: _, ...rest } = state.items
            return { items: rest }
          }
          return { items: { ...state.items, [id]: { ...existing, quantity: newQty } } }
        }),

      updateItemQuantity: (id, quantity) =>
        set(state => {
          const existing = state.items[id]
          if (!existing) return state
          if (quantity <= 0) {
            const { [id]: _, ...rest } = state.items
            return { items: rest }
          }
          return { items: { ...state.items, [id]: { ...existing, quantity } } }
        }),

      removeItem: id =>
        set(state => {
          const { [id]: _, ...rest } = state.items
          return { items: rest }
        }),

      clearCart: () => set({ items: {} }),

      getTotalItems: () => Object.values(get().items).reduce((sum, it) => sum + it.quantity, 0),
      getTotalPrice: () =>
        Object.values(get().items).reduce((sum, it) => sum + it.quantity * it.price, 0),

      /** ✅ Getters por item */
      getItemQuantity: id => get().items[id]?.quantity ?? 0,
      getItemSubtotal: id => {
        const it = get().items[id]
        return it ? it.quantity * it.price : 0
      },
      getItemsArray: () => Object.values(get().items),
    }),
    { name: 'wefit-cart' }
  )
)
