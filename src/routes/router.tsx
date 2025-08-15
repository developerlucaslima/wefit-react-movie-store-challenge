import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/app/layouts/app-layout/app-layout'
import { CartPage } from '@/app/modules/cart/pages/cart-page/cart-page'
import { EmptyCartPage } from '@/app/modules/cart/pages/empty-cart-page/empty-cart-page'
import { CheckoutPage } from '@/app/modules/checkout/pages/checkout-page/checkout-page'
import { HomePage } from '@/app/modules/home/pages/home-page/home-page'

import { ROUTES } from './routes'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.cart, element: <CartPage /> },
      { path: ROUTES.checkout, element: <CheckoutPage /> },
      { path: ROUTES['empty-cart'], element: <EmptyCartPage /> },
    ],
  },
])
