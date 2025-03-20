import { FastifyInstance } from 'fastify'
import { GetCategoriesController } from '../http/controller/category/get-categories-controller'

const getCategoriesController = new GetCategoriesController()

export async function getCategoriesRoutes(app: FastifyInstance) {
  app.get('/categories', getCategoriesController.handle)
}
