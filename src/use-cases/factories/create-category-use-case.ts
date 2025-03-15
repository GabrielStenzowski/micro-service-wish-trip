import { PrismaCategoryRepository } from '../../repositories/prisma/category-repository'
import { CreateCategoryUseCase } from '../category/create-category-use-case'

export function makeCreateCategoryUseCase() {
  const categoryRepository = new PrismaCategoryRepository()
  const useCase = new CreateCategoryUseCase(categoryRepository)
  return useCase
}
