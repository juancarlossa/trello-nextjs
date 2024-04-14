'use client'
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react'
import { type Post } from '@/types/tasks'
import { Pencil, Loader, Check } from '../icons'
import { useState } from 'react'
import { CardWithDivider } from './Card'
import { Reorder } from 'framer-motion'

export default function CardGroup ({ posts }: { posts: Post[] | null }) {
  const [items, setItems] = useState([0, 1, 2])
  const [tasks, setTasks] = useState([0, 1, 2, 3, 4, 5, 6])

  const data = [
    { title: 'To do', icon: Pencil, type: 'todo' },
    { title: 'Doing', icon: Loader, type: 'doing' },
    { title: 'Done', icon: Check, type: 'done' }
  ]

  const CardList = ({ posts, type }: { posts: Post[] | null, type: string }) => {
    return (
      <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
        {posts?.map((post, index) => {
          const {
            id: taskid,
            user,
            content,
            created_at: createdAt,
            liked,
            tasktype
          } = post

          const {
            email,
            id: userid,
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl
          } = user

          return (
            <Reorder.Item key={index} value={index}>
              <li key={index}>
                {tasktype === type
                  ? <CardWithDivider
                    id={taskid}
                    content={content}
                    key={taskid}
                    createdAt={createdAt}
                    liked={liked}
                    tasktype={tasktype}
                    userName={userName}
                    userFullName={userFullName}
                    avatarUrl={avatarUrl}
                    email={email}
                    userId={userid}
                  />
                  : ''
                }
              </li>
            </Reorder.Item>
          )
        })
        }
      </Reorder.Group>
    )
  }
  const CardCol = ({ posts, title, type, icon }: { posts: Post[] | null, title: string, type: string, icon: () => JSX.Element }) => {
    return (
      <Card
        className="w-[400px] h-[500px] mx-5">
        <CardHeader className="flex gap-3">
          {icon()}
          <div className="flex flex-col">
            <p className="text-md">{title}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <CardList posts={posts} type={type} />
        </CardBody>
        <Divider />
      </Card>
    )
  }
  return (
    <Reorder.Group axis="x" values={items} onReorder={setItems}>
      <section className='flex flex-row'>
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <CardCol posts={posts} key={item} title={data[item].title} icon={data[item].icon} type={data[item].type} />
          </Reorder.Item>
        ))}
      </section>
    </Reorder.Group>

  )
}

// <CardCol key={1} title="Doing" icon={Loader} type='doing' />
// <CardCol key={2} title="Done" icon={Check} type='done' />
