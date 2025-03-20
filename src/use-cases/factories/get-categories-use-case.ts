import { PrismaCategoryRepository } from '../../repositories/prisma/category-repository'
import { GetCategoriesUseCase } from '../category/get-categories-use-case'

export function makeGetCategoriesUseCase() {
  const categoryRepository = new PrismaCategoryRepository()
  const useCase = new GetCategoriesUseCase(categoryRepository)
  return useCase
}
