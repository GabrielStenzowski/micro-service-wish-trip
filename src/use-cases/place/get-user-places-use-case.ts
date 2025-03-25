import { IPlaceRepository } from '../../repositories/i-place-repository'

interface getUserPlacesParams {
  userId: string
  active: boolean
}

class GetUserPlacesUseCase {
  constructor(private placeRepository: IPlaceRepository) {
    this.placeRepository = placeRepository
  }

  async execute({ userId, active }: getUserPlacesParams) {
    console.log('Executing userPlaces', { userId, active })

    const userPlaces = await this.placeRepository.getUserPlaces({
      userId,
      active,
    })

    return userPlaces
  }
}

export { GetUserPlacesUseCase }
