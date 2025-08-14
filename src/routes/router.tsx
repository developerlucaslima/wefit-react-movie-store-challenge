import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/app/layouts/app-layout/app-layout'
import { CartPage } from '@/app/modules/cart/pages/cart-page/cart-page'
import { CheckoutPage } from '@/app/modules/checkout/pages/checkout-page/checkout-page'
import { HomePage } from '@/app/modules/home/pages/home-page/home-page'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
    ],
  },
])
