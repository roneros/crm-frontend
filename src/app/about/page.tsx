'use client'
import { useQuery } from '@tanstack/react-query'
interface User {
   id: number
   name: string
}
async function fetchUsers() {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
   return res.json()
}

export default function HomePage() {
   const { data, isLoading, isError } = useQuery<User[]>({
      queryKey: ['users'],
      queryFn: fetchUsers,
   })
   if (isLoading) return <div>Loading...</div>
   if (isError) return <div>Ошибка при загрузке данных... </div>

   return (
      <ul>{data?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
   )
}
