import { ICategoryRepository } from '../../repositories/i-category-repository'

class GetCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async execute() {
    const categories = await this.categoryRepository.getCategories()
    return categories
  }
}

export { GetCategoriesUseCase }
