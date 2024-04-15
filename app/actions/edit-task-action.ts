'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'

export const editLike = async (id: string, liked: boolean) => {
  const supabase = createServerActionClient({ cookies })
  // revisar si el usuario realmene está autentificado
  const { data: { user } } = await supabase.auth.getUser()
  // if (user === null) return

  // Like button
  if (!liked) {
    await supabase.from('tasks')
      .update({ liked: true })
      .eq('id', id)
    revalidatePath('/')
    console.log('update', id)
  } else {
    await supabase.from('tasks')
      .update({ liked: false })
      .eq('id', id)
    revalidatePath('/')
  }
  console.log('update', liked)
}
export const editTodo = async (id: string) => {
  const supabase = createServerActionClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  // if (user === null) return

  await supabase.from('tasks')
    .update({ tasktype: 'todo' })
    .eq('id', id)
  revalidatePath('/')
  console.log('update', id)
}

export const editDoing = async (id: string) => {
  const supabase = createServerActionClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  // if (user === null) return

  await supabase.from('tasks')
    .update({ tasktype: 'doing' })
    .eq('id', id)
  revalidatePath('/')
  console.log('update', id)
}

export const editDone = async (id: string) => {
  const supabase = createServerActionClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  // if (user === null) return

  await supabase.from('tasks')
    .update({ tasktype: 'done' })
    .eq('id', id)
  revalidatePath('/')
  console.log('update', id)
}
