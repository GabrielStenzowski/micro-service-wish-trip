import { User } from '@prisma/client'
import { IUserRepository } from '../../repositories/i-users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from '../errors/user-already-exist-error'

interface registerUserParams {
  email: string
  name: string
  password: string
  date_birth: string
}

class RegisterUserUseCase {
  constructor(private usersRepository: IUserRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ email, name, password, date_birth }: registerUserParams) {
    console.log('Creating user:', {
      email,
      name,
      password,
      date_birth,
    })
    const passwordHash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError('409')
    }

    const userCreated = await this.usersRepository.create({
      email,
      name,
      password_hash: passwordHash,
      date_birth: date_birth,
    })

    console.log('dentro do use case')
    return userCreated
  }
}

export { RegisterUserUseCase }
