import { Category, Place, PlaceCategory } from '@prisma/client'

export interface createCategoryParams {
  name: string
  places: string[]
}

export interface createPlaceCategoryParams {
  placeId: string
  categoryId: string
  place?: Place
  category?: Category
}

interface ICategoryRepository {
  createCategory(data: createCategoryParams): Promise<Category>
  createPlaceCategory(data: createPlaceCategoryParams): Promise<PlaceCategory>
}

export { ICategoryRepository }
