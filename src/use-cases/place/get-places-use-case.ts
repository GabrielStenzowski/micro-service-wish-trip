import { IPlaceRepository } from '../../repositories/i-place-repository'

class GetPlacesUseCase {
  constructor(private placeRepository: IPlaceRepository) {
    this.placeRepository = placeRepository
  }

  async execute() {
    const places = await this.placeRepository.getPlaces()
    return places
  }
}

export { GetPlacesUseCase }
