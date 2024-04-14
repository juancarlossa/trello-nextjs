'use client'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { deletePost } from '@/actions/delete-task.action'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { XIcon } from '../icons'
import { LikeButton } from '../Button/LikeButton'
import { DoingButton } from '../Button/DoingButton'
import { DoneButton } from '../Button/DoneButton'
import { TodoButton } from '../Button/TodoButton'

export function CardWithDivider ({
  id,
  content,
  createdAt,
  liked,
  tasktype,
  userFullName,
  userName,
  avatarUrl,
  email,
  userId
}: {
  id: string
  content: string
  createdAt: string
  liked: boolean
  tasktype: string
  userFullName: string
  userName: string
  avatarUrl: string
  email: string
  userId: string
}) {
  const [isVisible, setIsVisible] = useState(true)

  const DeleteButton = () => {
    return (
      <button
        onClick={async () => {
          setIsVisible(false)
          await deletePost(id)
        }}
        className="flex flex-row gap-3">
        <XIcon />
      </button>
    )
  }
  const variants = {
    visible: {
      opacity: 1,
      transition: { duration: 1.5 }
    },

    invisible: {
      opacity: 0,
      transition: { duration: 0.5 },
      exit: { opacity: 0 }
    }
  }
  return (
    <motion.div
      key={id}
      variants={variants}
      initial={{ opacity: 0 }}
      animate={isVisible ? 'visible' : 'invisible'}
      className=''
    >
      <Card className="bg-slate-800 w-[250px] my-5">
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
    </motion.div>

  )
}
