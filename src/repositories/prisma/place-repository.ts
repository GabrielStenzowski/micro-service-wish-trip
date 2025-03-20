import { Place, UserPlace } from '@prisma/client'
import {
  CreatePlaceParams,
  CreateUserPlaceParams,
  GetUserPlaceParams,
  IPlaceRepository,
} from '../i-place-repository'
import { prisma } from '../../lib/prisma'

class PrismaPlaceRepository implements IPlaceRepository {
  async createPlace(data: CreatePlaceParams): Promise<Place> {
    const place = await prisma.place.create({
      data: {
        name: data.name,
        location: data.location,
        user: { connect: { id: data.idea_userId } },
        category: { connect: { id: data.categoryId } },
        userPlaces: {
          create: data.userPlaces.map((userId) => ({
            user: { connect: { id: userId } },
            visited: false,
            active: true,
          })),
        },
      },
    })
    return place
  }

  async createUserPlace(data: CreateUserPlaceParams): Promise<UserPlace> {
    const userPlace = await prisma.userPlace.create({
      data: {
        user: { connect: { id: data.userId } },
        place: { connect: { id: data.placeId } },
        opinion: data.opinion,
        visited: data.visited,
        active: data.active,
      },
    })
    return userPlace
  }

  async getUserPlaces(
    data: GetUserPlaceParams
  ): Promise<(UserPlace & { place: Place })[]> {
    const userPlace = await prisma.userPlace.findMany({
      where: {
        userId: data.userId,
      },
      include: {
        place: true,
      },
    })

    return userPlace
  }

  async getPlaces() {
    const places = await prisma.place.findMany()
    return places
  }
}

export { PrismaPlaceRepository }
