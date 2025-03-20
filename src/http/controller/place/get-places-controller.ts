import { FastifyReply, FastifyRequest } from 'fastify'
import { makePlacesUseCase } from '../../../use-cases/factories/get-places-use-case'

class GetPlacesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const placesUseCase = makePlacesUseCase()

    try {
      const places = await placesUseCase.execute()
      reply.status(200).send(places)
    } catch (err: any) {
      reply.status(500).send({ message: err.message })
    }
  }
}

export { GetPlacesController }
