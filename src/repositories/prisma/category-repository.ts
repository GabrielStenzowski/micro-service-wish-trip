import { Category } from '@prisma/client'
import {
  createCategoryParams,
  ICategoryRepository,
} from '../i-category-repository'
import { prisma } from '../../lib/prisma'

class PrismaCategoryRepository implements ICategoryRepository {
  async createCategory(data: createCategoryParams): Promise<Category> {
    const category = await prisma.category.create({
      data: {
        name: data.name,
      },
    })

    return category
  }

  async getCategories() {
    const categories = await prisma.category.findMany()

    return categories
  }
}

export { PrismaCategoryRepository }
