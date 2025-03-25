import { PrismaPlaceRepository } from '../../repositories/prisma/place-repository'
import { UpdateUserPlaceUseCase } from '../place/update-user-place-use-case'

export function makeUpdateUserPlaceUseCase() {
  const placeRepository = new PrismaPlaceRepository()
  const useCase = new UpdateUserPlaceUseCase(placeRepository)
  return useCase
}
