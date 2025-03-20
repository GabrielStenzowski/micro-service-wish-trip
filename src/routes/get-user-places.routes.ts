import { FastifyInstance } from 'fastify'
import { GetUserPlacesController } from '../http/controller/place/get-user-places-controller'

const getUserPlacesController = new GetUserPlacesController()

export async function getUserPlacesRoutes(app: FastifyInstance) {
  app.post('/get-user-places', getUserPlacesController.handle)
}
