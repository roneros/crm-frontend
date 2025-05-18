'use client'

import { createQueryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { type ReactNode, useState } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
   const [queryClient] = useState(() => createQueryClient())

   return (
      <QueryClientProvider client={queryClient}>
         {children}
         {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
         )}
      </QueryClientProvider>
   )
}
