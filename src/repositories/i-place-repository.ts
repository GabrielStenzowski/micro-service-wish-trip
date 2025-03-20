import { Place, UserPlace } from '@prisma/client'
export interface CreatePlaceParams {
  name: string
  location: string
  idea_userId: string
  categoryId: string
  userPlaces: string[]
}
export interface CreateUserPlaceParams {
  userId: string
  placeId: string
  visited: boolean
  opinion?: string
  active: boolean
  user: string
  place: string
}

export interface GetUserPlaceParams {
  userId: string
}

interface IPlaceRepository {
  createPlace(data: CreatePlaceParams): Promise<Place>
  createUserPlace(data: CreateUserPlaceParams): Promise<UserPlace>
  getUserPlaces(
    data: GetUserPlaceParams
  ): Promise<(UserPlace & { place: Place })[]>
  getPlaces(): Promise<Place[]>
}

export { IPlaceRepository }
