import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetUserPlacesUseCase } from '../../../use-cases/factories/get-user-places-use-case'
import { z } from 'zod'

class GetUserPlacesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const getUserPlacesUseCase = makeGetUserPlacesUseCase()

    const getUserPlacesBodySchema = z.object({
      userId: z.string(),
      active: z.boolean(),
    })

    const data = getUserPlacesBodySchema.parse(request.body)

    try {
      const userPlaces = await getUserPlacesUseCase.execute(data)

      reply
        .status(200)
        .send({ message: 'User places retrieved successfully', userPlaces })
    } catch (err: any) {
      console.log('Error:', { err })
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { GetUserPlacesController }
