import { TypeUser } from '@/shared/types/user.types'

export interface IProfileInput extends Pick<TypeUser, 'password' | 'email'> {}
