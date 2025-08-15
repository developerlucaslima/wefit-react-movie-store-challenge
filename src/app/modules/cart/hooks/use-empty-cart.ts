import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/routes/routes'

export function useEmptyCart() {
  const navigate = useNavigate()

  function handleOnBack() {
    navigate(ROUTES.home, { replace: true })
  }

  return { handleOnBack }
}
