import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/routes/routes'

export function useCheckoutSuccess() {
  const navigate = useNavigate()

  function handleOnBack() {
    navigate(ROUTES.home, { replace: true })
  }

  return { handleOnBack }
}
