import {
  IPlaceRepository,
  UpdateUserPlaceParams,
} from '../../repositories/i-place-repository'

class UpdateUserPlaceUseCase {
  constructor(private placeRepository: IPlaceRepository) {
    this.placeRepository = placeRepository
  }

  async execute({ userId, placeId, visited, opinion }: UpdateUserPlaceParams) {
    console.log('Updating user place:', { userId, placeId, visited, opinion })

    const userPlaceUpdated = await this.placeRepository.updateUserPlace({
      userId,
      placeId,
      visited,
      opinion,
    })

    return userPlaceUpdated
  }
}

export { UpdateUserPlaceUseCase }
