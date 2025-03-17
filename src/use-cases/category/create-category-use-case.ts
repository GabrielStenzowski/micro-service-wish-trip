import { Category } from '@prisma/client'
import { ICategoryRepository } from '../../repositories/i-category-repository'

interface createCategoryParams {
  name: string
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async execute({ name }: createCategoryParams): Promise<Category> {
    console.log('Creating category:', {
      name,
    })

    const categoryCreated = await this.categoryRepository.createCategory({
      name,
    })

    return categoryCreated
  }
}

export { CreateCategoryUseCase }
