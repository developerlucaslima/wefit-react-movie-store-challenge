import { Outlet } from 'react-router-dom'

import { HeaderComponent } from "@/app/ui/header/header";

import { AppLayout } from "./app-layout-styles";

export function MainLayout() {
  return (
    <AppLayout>
      <HeaderComponent cartCount={0} />
      <main>
        <Outlet />
      </main>
    </AppLayout>
  )
}
