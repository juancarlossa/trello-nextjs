'use client'
import { Pencil } from '../icons'
import { editTodo } from '@/actions/edit-task-action'

export function TodoButton ({ id }: { id: string }) {
  const handleClick = async () => {
    await editTodo(id)
  }

  return (
    <button
      onClick={handleClick}
    >
      <Pencil />
    </button>
  )
}
