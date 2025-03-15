import { Category } from '@prisma/client'
import { ICategoryRepository } from '../../repositories/i-category-repository'

interface createCategoryParams {
  name: string
  places: string[]
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async execute({ name, places }: createCategoryParams): Promise<Category> {
    console.log('Creating category:', {
      name,
      places,
    })

    const categoryCreated = await this.categoryRepository.createCategory({
      name,
      places,
    })

    return categoryCreated
  }
}

export { CreateCategoryUseCase }
