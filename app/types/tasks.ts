import { type Tables } from '@/types/database'

type PostEntity = Tables<'tasks'>
type UserEntity = Tables<'users'>

export type Post = PostEntity & {
  user: UserEntity
}
