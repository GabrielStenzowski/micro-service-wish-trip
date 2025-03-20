import { FastifyInstance } from 'fastify'
import { CreateCategoryController } from '../http/controller/category/create-category-controller'

const createCategoryController = new CreateCategoryController()

export async function createCategoryRoutes(app: FastifyInstance) {
  app.post('/category', createCategoryController.handle)
}
