import { PrismaPlaceRepository } from '../../repositories/prisma/place-repository'
import { GetUserPlacesUseCase } from '../place/get-user-places-use-case'

export function makeGetUserPlacesUseCase() {
  const placeRepository = new PrismaPlaceRepository()
  const useCase = new GetUserPlacesUseCase(placeRepository)
  return useCase
}
