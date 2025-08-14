import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { CartState } from './cart-store-types'

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: {},

      addItem: (item, quantity = 1) =>
        set((state) => {
          const existing = state.items[item.id]
          const newQty = (existing?.quantity ?? 0) + quantity
          return {
            items: { ...state.items, [item.id]: { ...item, quantity: newQty } },
          }
        }),

      incrementItem: (id, amount = 1) =>
        set((state) => {
          const existing = state.items[id]
          if (!existing) return state
          return {
            items: {
              ...state.items,
              [id]: { ...existing, quantity: existing.quantity + amount },
            },
          }
        }),

      decrementItem: (id, amount = 1) =>
        set((state) => {
          const existing = state.items[id]
          if (!existing) return state
          const newQty = existing.quantity - amount
          if (newQty <= 0) {
            const { [id]: _, ...rest } = state.items
            return { items: rest }
          }
          return {
            items: { ...state.items, [id]: { ...existing, quantity: newQty } },
          }
        }),

      updateItemQuantity: (id, quantity) =>
        set((state) => {
          const existing = state.items[id]
          if (!existing) return state
          if (quantity <= 0) {
            const { [id]: _, ...rest } = state.items
            return { items: rest }
          }
          return { items: { ...state.items, [id]: { ...existing, quantity } } }
        }),

      removeItem: (id) =>
        set((state) => {
          const { [id]: _, ...rest } = state.items
          return { items: rest }
        }),

      clearCart: () => set({ items: {} }),
    }),
    { name: 'wefit-cart' },
  ),
)

export const selectTotalItems = (s: CartState) =>
  Object.values(s.items).reduce((sum, it) => sum + it.quantity, 0)

export const selectTotalPrice = (s: CartState) =>
  Object.values(s.items).reduce((sum, it) => sum + it.quantity * it.price, 0)

export const selectItemQuantity = (id: number) => (s: CartState) =>
  s.items[id]?.quantity ?? 0

export const selectItemSubtotal = (id: number) => (s: CartState) => {
  const it = s.items[id]
  return it ? it.quantity * it.price : 0
}
