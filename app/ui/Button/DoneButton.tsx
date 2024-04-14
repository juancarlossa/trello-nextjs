'use client'
import { Check } from '../icons'
import { editDone } from '@/actions/edit-task-action'

export function DoneButton ({ id }: { id: string }) {
  const handleClick = async () => {
    await editDone(id)
  }

  return (
    <button
      onClick={handleClick}
    >
      <Check />
    </button>
  )
}
