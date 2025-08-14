import { Outlet } from 'react-router-dom'

import { Header } from '@/app/ui/header/header'

import { AppLayout } from './app-layout-styles'

export function MainLayout() {
  return (
    <AppLayout>
      <Header />
      <main>
        <Outlet />
      </main>
    </AppLayout>
  )
}
