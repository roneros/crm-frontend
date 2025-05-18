import { type DefaultOptions, QueryClient } from '@tanstack/react-query'

const defaultOptions: DefaultOptions = {
   queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      retry: 3,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
   },
   mutations: {
      retry: 1,
   },
}
export const createQueryClient = () =>
   new QueryClient({
      defaultOptions,
   })
