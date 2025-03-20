import { IPlaceRepository } from '../../repositories/i-place-repository'

interface getUserPlacesParams {
  userId: string
}

class GetUserPlacesUseCase {
  constructor(private placeRepository: IPlaceRepository) {
    this.placeRepository = placeRepository
  }

  async execute({ userId }: getUserPlacesParams) {
    console.log('Executing userPlaces', { userId })

    const userPlaces = await this.placeRepository.getUserPlaces({ userId })

    return userPlaces
  }
}

export { GetUserPlacesUseCase }
