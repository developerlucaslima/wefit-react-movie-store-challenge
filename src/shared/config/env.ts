import { z } from 'zod'

const envSchema = z.object({
  VITE_API_BASE_URL: z.url().default('https://wefit-movies.vercel.app/api'),
  VITE_APP_ENV: z.enum(['development', 'homolog', 'production']).default('development'),
})

export const env = envSchema.parse(import.meta.env)
