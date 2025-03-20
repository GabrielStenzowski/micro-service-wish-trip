import { UserPlace } from '@prisma/client'
import { IPlaceRepository } from '../../repositories/i-place-repository'

interface createUserPlaceParams {
  userId: string
  placeId: string
  visited: boolean
  active: boolean
  opinion?: string
  user: string
  place: string
}

class CreateUserPlaceUseCase {
  constructor(private placeRepository: IPlaceRepository) {
    this.placeRepository = placeRepository
  }

  async execute({
    userId,
    placeId,
    visited,
    active,
    opinion,
    user,
    place,
  }: createUserPlaceParams): Promise<UserPlace> {
    console.log('Creating user place:', {
      userId,
      placeId,
      visited,
      opinion,
      active,
      user,
      place,
    })

    const userPlaceCreated = await this.placeRepository.createUserPlace({
      userId,
      placeId,
      visited,
      opinion,
      active,
      user,
      place,
    })

    return userPlaceCreated
  }
}

export { CreateUserPlaceUseCase }
