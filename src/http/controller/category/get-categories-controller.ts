import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetCategoriesUseCase } from '../../../use-cases/factories/get-categories-use-case'

class GetCategoriesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const getCategoriesUseCase = makeGetCategoriesUseCase()

    try {
      const categories = await getCategoriesUseCase.execute()
      reply.status(200).send(categories)
    } catch (err: any) {
      reply.status(500).send({ message: err.message })
    }
  }
}

export { GetCategoriesController }
