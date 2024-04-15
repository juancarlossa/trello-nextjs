'use client'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { deletePost } from '@/actions/delete-task.action'
// import { useState } from 'react'
// import { Reorder, useMotionValue } from 'framer-motion'
import { XIcon } from '../icons'
import { LikeButton } from '../Button/LikeButton'
import { DoingButton } from '../Button/DoingButton'
import { DoneButton } from '../Button/DoneButton'
import { TodoButton } from '../Button/TodoButton'
// import { useRaisedShadow } from './use-raised-shadow'

export function CardWithDivider ({
  id,
  content,
  liked,
  tasktype,
  taskIndex

}: {
  id: string
  content: string
  liked: boolean
  tasktype: string
  taskIndex: number
}) {
  // const [isVisible, setIsVisible] = useState(true)

  const DeleteButton = () => {
    return (
      <button
        onClick={async () => {
          // setIsVisible(false)
          await deletePost(id)
        }}
        className="flex flex-row gap-3">
        <XIcon />
      </button>
    )
  }

  return (
    <Card className={
      tasktype === 'todo'
        ? 'bg-slate-200 text-black w-[250px] my-5'
        : tasktype === 'doing'
          ? 'bg-blue-800 w-[250px] my-5'
          : tasktype === 'done' ? 'bg-green-600 w-[250px] my-5' : ''
    }>
      <CardHeader
        className="flex gap-3 justify-between">
        <Image
          alt="nextui logo"
          height={40}
          radius='full'
          src='img-juank.jpg'
          width={40}
        />
        <DeleteButton />
      </CardHeader>

      <CardBody className="justify-center items-center pb-7">
        <p className='font-extralight antialiased text-xl selection:bg-fuchsia-300 selection:text-fuchsia-900'>{content}</p>
      </CardBody>

      <CardFooter className='justify-between items-center px-10'>
        {tasktype === 'todo' ? <><DoingButton id={id} /><DoneButton id={id} /></> : ''}
        {tasktype === 'doing' ? <><TodoButton id={id} /><DoneButton id={id} /></> : ''}
        {tasktype === 'done' ? <><TodoButton id={id} /><DoingButton id={id} /></> : ''}
        <LikeButton liked={liked} id={id} />
      </CardFooter>
    </Card>
  )
}
