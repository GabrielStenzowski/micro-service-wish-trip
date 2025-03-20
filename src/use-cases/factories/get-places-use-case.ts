import { PrismaPlaceRepository } from '../../repositories/prisma/place-repository'
import { GetPlacesUseCase } from '../place/get-places-use-case'

export function makePlacesUseCase() {
  const placeRepository = new PrismaPlaceRepository()
  const useCase = new GetPlacesUseCase(placeRepository)
  return useCase
}
