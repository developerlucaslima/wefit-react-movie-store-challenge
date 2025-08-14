export type CartItem = {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}

export type CartState = {
  items: Record<number, CartItem>
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void
  incrementItem: (id: number, amount?: number) => void
  decrementItem: (id: number, amount?: number) => void
  updateItemQuantity: (id: number, quantity: number) => void
  removeItem: (id: number) => void
  clearCart: () => void
}
