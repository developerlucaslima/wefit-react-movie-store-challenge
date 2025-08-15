export const ROUTES = {
  home: '/',
  cart: '/cart',
  checkout: '/checkout',
  'empty-cart': '/empty-cart',
} as const

export type RouteKey = keyof typeof ROUTES
