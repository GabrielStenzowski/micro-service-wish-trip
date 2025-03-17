import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreatePlaceUseCase } from '../../../use-cases/factories/create-place-use-case'
import { z } from 'zod'

class CreatePlaceController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const createPlaceUseCase = makeCreatePlaceUseCase()

    const createPlaceBodySchema = z.object({
      name: z.string(),
      location: z.string(),
      opinion: z.string().optional(),
      userId: z.string(),
      categoryId: z.string(),
      userPlaces: z.array(z.string()),
    })

    const data = createPlaceBodySchema.parse(request.body)

    try {
      await createPlaceUseCase.execute(data)
      reply.status(201).send({ message: 'Place created successfully' })
    } catch (err: any) {
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { CreatePlaceController }
