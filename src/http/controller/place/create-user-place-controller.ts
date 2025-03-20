import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreateUserPlaceUseCase } from '../../../use-cases/factories/create-user-place-use-case'
import { z } from 'zod'

class CreateUserPlaceController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const createUserPlaceUseCase = makeCreateUserPlaceUseCase()

    const createUserPlaceBodySchema = z.object({
      userId: z.string(),
      placeId: z.string(),
      visited: z.boolean(),
      opinion: z.string().optional(),
      active: z.boolean(),
      user: z.string(),
      place: z.string(),
    })

    const data = createUserPlaceBodySchema.parse(request.body)
    try {
      await createUserPlaceUseCase.execute(data)
      reply.status(201).send({ message: 'User place created successfully' })
    } catch (err: any) {
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { CreateUserPlaceController }
