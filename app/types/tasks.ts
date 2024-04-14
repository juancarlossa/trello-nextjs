import { type Database } from '@/types/database'

type PostEntity = Database['public']['Tables']['tasks']['Row']
type UserEntity = Database['public']['Tables']['users']

export type Post = PostEntity & {
  user: UserEntity
}
