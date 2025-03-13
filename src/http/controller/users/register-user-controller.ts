import { FastifyReply, FastifyRequest } from 'fastify'
import { makeRegisterUserUseCase } from '../../../use-cases/factories/register-user-use-case'

import { z } from 'zod'
import { UserAlreadyExistsError } from '../../../use-cases/errors/user-already-exist-error'

class RegisterUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const registerUserUseCase = makeRegisterUserUseCase()

    const registerUserBodySchema = z.object({
      email: z.string().email(),
      name: z.string(),
      password: z.string().min(8),
      date_birth: z.string(),
    })

    const data = registerUserBodySchema.parse(request.body)
    try {
      await registerUserUseCase.execute(data)
      reply.status(201).send({ message: 'User registered successfully' })
    } catch (err: any) {
      if (err instanceof UserAlreadyExistsError) {
        reply
          .status(409)
          .send({ message: err.message, errorCode: err.errorCode })
      }
      return reply.status(500).send({ message: err.message })
    }
  }
}

export { RegisterUserController }
