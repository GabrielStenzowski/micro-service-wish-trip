import { IPlaceRepository } from '../../repositories/i-place-repository'
interface CreatePlaceParams {
  name: string
  location: string
  idea_userId: string
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
    idea_userId,
    categoryId,
    userPlaces,
  }: CreatePlaceParams) {
    console.log('Creating place:', {
      name,
      location,
      idea_userId,
      categoryId,
      userPlaces,
    })
    const placeCreated = await this.placeRepository.createPlace({
      name,
      location,
      idea_userId,
      categoryId,
      userPlaces,
    })
    return placeCreated
  }
}

export { CreatePlaceUseCase }
