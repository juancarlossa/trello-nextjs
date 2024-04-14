'use client'
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react'
import { type Post } from '@/types/tasks'
import { Pencil, Loader, Check } from '../icons'
import { useState, type RefObject } from 'react'
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
            id,
            user,
            content,
            created_at: createdAt,
            liked,
            tasktype,
            index: indexDB
          } = post
          console.log(post.content, index)
          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl
          } = user

          return (
            <Reorder.Item key={index} value={index}>
              <li key={index}>
                {tasktype === type
                  ? <CardWithDivider
                    id={id}
                    content={content}
                    key={id}
                    userName={userName}
                    userFullName={userFullName}
                    avatarUrl={avatarUrl}
                    createdAt={createdAt}
                    liked={liked}
                    tasktype={tasktype}
                    index={indexDB}
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
  const CardCol = ({ key, title, type, ref, icon }: { key?: number, title: string, type: string, ref?: RefObject<HTMLElement>, icon: () => JSX.Element }) => {
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
            <CardCol key={item} title={data[item].title} icon={data[item].icon} type={data[item].type} />
          </Reorder.Item>
        ))}
      </section>
    </Reorder.Group>

  )
}

// <CardCol key={1} title="Doing" icon={Loader} type='doing' />
// <CardCol key={2} title="Done" icon={Check} type='done' />
