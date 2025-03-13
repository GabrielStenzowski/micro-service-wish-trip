import { Category, PlaceCategory } from '@prisma/client'
import {
  createCategoryParams,
  createPlaceCategoryParams,
  ICategoryRepository,
} from '../i-category-repository'
import { prisma } from '../../lib/prisma'

class PrismaCategoryRepository implements ICategoryRepository {
  async createCategory(data: createCategoryParams): Promise<Category> {
    const category = await prisma.category.create({
      data: {
        name: data.name,
        places: {
          create: data.places.map((placeId) => ({
            place: { connect: { id: placeId } },
          })),
        },
      },
      include: {
        places: true,
      },
    })

    return category
  }

  async createPlaceCategory(
    data: createPlaceCategoryParams
  ): Promise<PlaceCategory> {
    const placeCategory = await prisma.placeCategory.create({
      data: {
        place: { connect: { id: data.placeId } },
        category: { connect: { id: data.categoryId } },
      },
    })

    return placeCategory
  }
}

export { PrismaCategoryRepository }
