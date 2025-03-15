import { Place, UserPlace } from '@prisma/client'
import {
  CreatePlaceParams,
  CreateUserPlaceParams,
  IPlaceRepository,
} from '../i-place-repository'
import { prisma } from '../../lib/prisma'

class PrismaPlaceRepository implements IPlaceRepository {
  async createPlace(data: CreatePlaceParams): Promise<Place> {
    const place = await prisma.place.create({
      data: {
        name: data.name,
        location: data.location,
        opinion: data.opinion,
        user: { connect: { id: data.userId } },
        categories: {
          create: data.categories.map((categoryId) => ({
            category: { connect: { id: categoryId } },
          })),
        },
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
        visited: data.visited,
        active: data.active,
      },
    })
    return userPlace
  }
}

export { PrismaPlaceRepository }
