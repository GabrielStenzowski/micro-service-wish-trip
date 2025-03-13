import { PrismaUserRepository } from '../../repositories/prisma/users-repository'
import { RegisterUserUseCase } from '../users/register-user-use-case'

export function makeRegisterUserUseCase() {
  const userRepository = new PrismaUserRepository()
  const useCase = new RegisterUserUseCase(userRepository)
  return useCase
}
