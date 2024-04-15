'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'

export const deletePost = async (id: string) => {
  const supabase = createServerActionClient({ cookies })
  // revisar si el usuario realmene está autentificado
  // const { data: { user } } = await supabase.auth.getUser()
  // if (user === null) return

  await supabase.from('tasks')
    .delete()
    .eq('id', id)
  revalidatePath('/')
  console.log('delete', id)
}
