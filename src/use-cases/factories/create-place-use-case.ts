import { PrismaPlaceRepository } from '../../repositories/prisma/place-repository'
import { CreatePlaceUseCase } from '../place/create-place-use-case'

export function makeCreatePlaceUseCase() {
  const placeRepository = new PrismaPlaceRepository()
  const useCase = new CreatePlaceUseCase(placeRepository)
  return useCase
}
