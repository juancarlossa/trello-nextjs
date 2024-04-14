'use client'
import { useState } from 'react'
import { Heart, HeartOnHover } from '../icons'
import { editLike } from '@/actions/edit-task-action'

export function LikeButton ({ id, liked }: { id: string, liked: boolean }) {
  const [isLiked, setLiked] = useState(liked)
  const handleClick = async () => {
    setLiked(!isLiked)
    await editLike(id, liked)
  }

  return (
    <button
      onClick={handleClick}
    >
      {isLiked ? <HeartOnHover /> : <Heart />}
    </button>
  )
}
