import { FastifyInstance } from 'fastify'
import { GetPlacesController } from '../http/controller/place/get-places-controller'

const getPlacesController = new GetPlacesController()
export async function getPlacesRoutes(app: FastifyInstance) {
  app.get('/places', getPlacesController.handle)
}
