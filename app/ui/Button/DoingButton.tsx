'use client'
import { Loader } from '../icons'
import { editDoing } from '@/actions/edit-task-action'

export function DoingButton ({ id }: { id: string }) {
  const handleClick = async () => {
    await editDoing(id)
  }

  return (
    <button
      onClick={handleClick}
    >
      <Loader />
    </button>
  )
}
