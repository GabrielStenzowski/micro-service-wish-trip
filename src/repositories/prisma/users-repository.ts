import { User } from '@prisma/client'
import { createUserParams, IUserRepository } from '../i-users-repository'
import { prisma } from '../../lib/prisma'

class PrismaUserRepository implements IUserRepository {
  async create(data: createUserParams): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
        date_birth: new Date(data.date_birth),
      },
    })

    return user
  }

  async findByEmail(email: string) {
    const emailUser = await prisma.user.findUnique({
      where: { email },
    })
    return emailUser
  }
}

export { PrismaUserRepository }
