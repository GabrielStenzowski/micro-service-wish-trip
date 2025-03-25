import { FastifyReply, FastifyRequest } from 'fastify'
import { makeUpdateUserPlaceUseCase } from '../../../use-cases/factories/update-user-place-use-case'
import { z } from 'zod'

class UpdateUserPlaceController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const updateUserPlaceUseCase = makeUpdateUserPlaceUseCase()
    const updateUserPlaceBodySchema = z.object({
      userId: z.string(),
      placeId: z.string(),
      visited: z.boolean().optional(),
      opinion: z.string().optional(),
    })

    const data = updateUserPlaceBodySchema.parse(request.body)

    try {
      await updateUserPlaceUseCase.execute(data)
      reply.status(200).send({ message: 'User place updated successfully' })
    } catch (err: any) {
      return reply.status(500).send({ error: err.message })
    }
  }
}

export { UpdateUserPlaceController }
