// import Image from "next/image";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Nav from './ui/Navbar/Nav'
import { type Database } from './types/database'
import { ComposeTask } from './ui/Forms/ComposeTask'
import { CardList } from './ui/TaskList/CardList'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  // GET session
  // Redireccion si no hay logeo
  // if (session === null) {
  //  redirect('/login')
  // }
  // GET data from Database
  const { data: posts } = await supabase
    .from('tasks')
    .select('*, user:users(*)')
    .order('created_at', { ascending: true })

  console.log('get')
  // .select('content')

  const avatarUrl = session?.user?.user_metadata?.avatar_url

  return (
    <main className="h-screen">
      <Nav session={session} avatarUrl={avatarUrl} />
      <section className="w-4/5 mx-auto flex flex-col items-center justify-center">
        <ComposeTask className='' />
        <CardList posts={posts} />

      </section>
    </main>
  )
}
