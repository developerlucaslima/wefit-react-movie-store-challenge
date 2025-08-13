import axios from 'axios'

import { env } from '@/shared/config/env'

export const api = axios.create({
  baseURL: env.VITE_API_BASE_URL,
})
