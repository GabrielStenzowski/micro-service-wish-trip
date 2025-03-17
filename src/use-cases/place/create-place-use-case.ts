import { IPlaceRepository } from '../../repositories/i-place-repository'
interface CreatePlaceParams {
  name: string
  location: string
  opinion?: string
  userId: string
  categoryId: string
  userPlaces: string[]
}
class CreatePlaceUseCase {
  constructor(private placeRepository: IPlaceRepository) {
    this.placeRepository = placeRepository
  }
  async execute({
    name,
    location,
    opinion,
    userId,
    categoryId,
    userPlaces,
  }: CreatePlaceParams) {
    console.log('Creating place:', {
      name,
      location,
      opinion,
      userId,
      categoryId,
      userPlaces,
    })
    const placeCreated = await this.placeRepository.createPlace({
      name,
      location,
      opinion,
      userId,
      categoryId,
      userPlaces,
    })
    return placeCreated
  }
}

export { CreatePlaceUseCase }
