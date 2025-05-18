'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../lib/utils'

type Props = {
   href: string
   children: React.ReactNode
   className?: string
   active?: string
   exact?: string
}

export default function ActiveLink({
   href,
   children,
   className,
   active = '',
   exact,
}: Props) {
   const pathname = usePathname()
   const isExact = exact ?? href === '/'
   const isActive = isExact ? pathname === href : pathname.startsWith(href)

   return (
      <Link
         href={href}
         className={cn(className, {
            active: isActive,
            [active]: isActive,
         })}
      >
         {children}
      </Link>
   )
}
