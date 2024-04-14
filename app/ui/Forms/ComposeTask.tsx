'use client'
import { addPost } from '@/actions/add-task-action'
import { Input } from '@nextui-org/input'
import { useRef } from 'react'
import { ComposePostButton } from '../Button/ComposeTaskButton'

export function ComposeTask ({ className }: { className: string }) {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addPost(formData)
        formRef.current?.reset()
      }}
      className="flex flex-row gap-3 justify-center items-center py-20">
      <Input
        name='content'
        type="text"
        color='secondary'
        label=""
        placeholder="Que esta pasando?"
        defaultValue=""
        className="w-[300px]"
      />
      <ComposePostButton />
    </form>
  )
}
