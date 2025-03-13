import { User } from '@prisma/client'

export interface createUserParams {
  email: string
  name: string
  password_hash: string
  date_birth: string
}

interface IUserRepository {
  create(data: createUserParams): Promise<User>
  findByEmail(email: string): Promise<User | null>
}
export { IUserRepository }
