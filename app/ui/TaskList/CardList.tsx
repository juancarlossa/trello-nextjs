'use server'
import { CardWithDivider } from './Card'
import { type Post } from '@/types/tasks'
import CardGroup from './CardGroup'

export async function CardList ({ posts }: { posts: Post[] | null }) {
  return (
    <>
      <CardGroup posts={posts} />
    </>
  )
}
