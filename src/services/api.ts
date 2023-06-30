import axios from 'axios'

import { BASE_URL } from 'src/constants'
import { authHeader } from './auth/authHeader'

export const api = axios.create({
  baseURL: BASE_URL,
})

// Add request interceptor
api.interceptors.request.use(
  (config: any) => {
    const headers = authHeader().headers

    // Merge the auth headers with the existing headers
    config.headers = {
      ...config.headers,
      ...headers,
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
