import { Category, Place } from '@prisma/client'

export interface createCategoryParams {
  name: string
}

interface ICategoryRepository {
  createCategory(data: createCategoryParams): Promise<Category>
  getCategories(): Promise<Category[]>
}

export { ICategoryRepository }
