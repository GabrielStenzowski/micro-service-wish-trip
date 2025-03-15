import { PrismaPlaceRepository } from '../../repositories/prisma/place-repository'
import { CreateUserPlaceUseCase } from '../place/create-user-place-use-case'

export function makeCreateUserPlaceUseCase() {
  const placeRepository = new PrismaPlaceRepository()
  const useCase = new CreateUserPlaceUseCase(placeRepository)
  return useCase
}
