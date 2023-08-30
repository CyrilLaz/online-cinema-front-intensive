import { TypeUser } from '@/shared/types/user.types'

export interface IUserEdit extends Omit<TypeUser, '_id' | 'createdAt'> {}
