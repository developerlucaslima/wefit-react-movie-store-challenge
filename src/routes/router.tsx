import { type JSX,lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/app/layouts/app-layout/app-layout'


const HomePage = lazy(() => import('@/app/modules/home/pages/home-page/home-page'))
const CartPage = lazy(() => import('@/app/modules/cart/pages/cart-page/cart-page'))
const CheckoutPage = lazy(() => import('@/app/modules/checkout/pages/checkout-page/checkout-page'))

const wrap = (el: JSX.Element) => <Suspense fallback={null}>{el}</Suspense>

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: wrap(<HomePage />) },
      { path: 'cart', element: wrap(<CartPage />) },
      { path: 'checkout', element: wrap(<CheckoutPage />) },
    ],
  },
])
