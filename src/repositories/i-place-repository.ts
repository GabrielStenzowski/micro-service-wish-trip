import { Place, UserPlace } from '@prisma/client'

export interface CreatePlaceParams {
  name: string
  location: string
  opinion?: string
  userId: string
  user: string
  categories: string[]
  userPlaces: string[]
}

export interface CreateUserPlaceParams {
  userId: string
  placeId: string
  visited: boolean
  active: boolean
  user: string
  place: string
}

interface IPlaceRepository {
  createPlace(data: CreatePlaceParams): Promise<Place>
  createUserPlace(data: CreateUserPlaceParams): Promise<UserPlace>
}

export { IPlaceRepository }
