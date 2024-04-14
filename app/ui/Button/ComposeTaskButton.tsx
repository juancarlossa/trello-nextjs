'use client'

import { Button } from '@nextui-org/button'
import { useFormStatus } from 'react-dom'

export function ComposePostButton () {
  const { pending } = useFormStatus()

  return (
    <Button
      disabled={pending}
      type='submit'
      className='my-auto'
      color="secondary"
      variant="shadow"
    >
      {pending ? 'Postear' : 'Postear'}
    </Button >
  )
}
