export const ROUTES = {
  home: '/',
  cart: '/cart',
  checkout: '/checkout',
} as const

export type RouteKey = keyof typeof ROUTES
