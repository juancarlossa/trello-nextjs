'use client'
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react'
import { type Post } from '@/types/tasks'
import { Pencil, Loader, Check } from '../icons'
import { useState } from 'react'
import { CardWithDivider } from './Card'
import { Reorder, useDragControls } from 'framer-motion'

export default function CardGroup ({ posts }: { posts: Post[] | null }) {
  const [items, setItems] = useState([0, 1, 2])
  const [tasks, setTasks] = useState(posts != null ? Array.from({ length: posts.length }, (_, index) => index) : [])

  const dragControls = useDragControls()

  const data = [
    { title: 'To do', icon: Pencil, type: 'todo' },
    { title: 'Doing', icon: Loader, type: 'doing' },
    { title: 'Done', icon: Check, type: 'done' }
  ]

  const CardList = ({ posts, type }: { posts: Post[] | null, type: string }) => {
    return (
      <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
        {tasks.map((taskIndex) => {
          const post = posts != null ? posts[taskIndex] : null
          return (
            <Reorder.Item value={taskIndex} key={taskIndex}>
              {post != null && post.tasktype === type && (
                <CardWithDivider
                  taskIndex={taskIndex}
                  id={post.id}
                  content={post.content}
                  key={post.id}
                  liked={post.liked}
                  tasktype={post.tasktype}
                />
              )}
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
        className="w-[300px] max-h-screen mx-5">
        <CardHeader className="flex gap-3 justify-between">
          {icon()}
          <div className="flex flex-row">
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
          <Reorder.Item key={item} value={item} dragListener={false} dragControls={dragControls}>
            <CardCol posts={posts} key={item} title={data[item].title} icon={data[item].icon} type={data[item].type} />
          </Reorder.Item>
        ))}
      </section>
    </Reorder.Group>
  )
}

// <CardCol key={1} title="Doing" icon={Loader} type='doing' />
// <CardCol key={2} title="Done" icon={Check} type='done' />
