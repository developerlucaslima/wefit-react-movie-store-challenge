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
          const newItems = { ...state.items }
          newItems[item.id] = { ...item, quantity: newQty }
          return { items: newItems }
        }),

      incrementItem: (id, amount = 1) =>
        set((state) => {
          const existing = state.items[id]
          if (!existing) return state
          const newItems = { ...state.items }
          newItems[id] = { ...existing, quantity: existing.quantity + amount }
          return { items: newItems }
        }),

      decrementItem: (id, amount = 1) =>
        set((state) => {
          const existing = state.items[id]
          if (!existing) return state
          const newQty = existing.quantity - amount
          if (newQty <= 0) {
            const newItems = { ...state.items }
            delete newItems[id]
            return { items: newItems }
          }
          const newItems = { ...state.items }
          newItems[id] = { ...existing, quantity: newQty }
          return { items: newItems }
        }),

      updateItemQuantity: (id, quantity) =>
        set((state) => {
          const existing = state.items[id]
          if (!existing) return state
          if (quantity <= 0) {
            const newItems = { ...state.items }
            delete newItems[id]
            return { items: newItems }
          }
          const newItems = { ...state.items }
          newItems[id] = { ...existing, quantity }
          return { items: newItems }
        }),

      removeItem: (id) =>
        set((state) => {
          const newItems = { ...state.items }
          delete newItems[id]
          return { items: newItems }
        }),

      clearCart: () => set({ items: {} }),
    }),
    {
      name: 'wefit-cart',
      partialize: (s) => ({ items: s.items }),
    },
  ),
)

export const selectCartTotalItems = (s: CartState) =>
  Object.values(s.items).reduce((sum, it) => sum + it.quantity, 0)

export const selectCartTotalPrice = (s: CartState) =>
  Object.values(s.items).reduce((sum, it) => sum + it.quantity * it.price, 0)

export const selectItemQuantity = (id: number) => (s: CartState) =>
  s.items[id]?.quantity ?? 0

export const selectItemSubtotal = (id: number) => (s: CartState) => {
  const it = s.items[id]
  return it ? it.quantity * it.price : 0
}
