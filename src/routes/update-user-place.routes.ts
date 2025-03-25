import { FastifyInstance } from 'fastify'
import { UpdateUserPlaceController } from '../http/controller/place/update-user-place-controller'

const updateUserPlaceController = new UpdateUserPlaceController()
export async function updateUserPlaceRoutes(app: FastifyInstance) {
  app.patch('/user-place', updateUserPlaceController.handle)
}
