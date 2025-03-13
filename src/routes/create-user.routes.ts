import { FastifyInstance } from 'fastify'
import { RegisterUserController } from '../http/controller/users/register-user-controller'

const registerUserController = new RegisterUserController()

export async function registerUserRoutes(app: FastifyInstance) {
  app.post('/user', registerUserController.handle)
}
