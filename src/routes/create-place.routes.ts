import { FastifyInstance } from 'fastify'
import { CreateCategoryController } from '../http/controller/category/create-category-controller'
import { CreatePlaceController } from '../http/controller/place/create-place-controller'

const createPlaceController = new CreatePlaceController()
export async function createPlaceRoutes(app: FastifyInstance) {
  app.post('/place', createPlaceController.handle)
}
