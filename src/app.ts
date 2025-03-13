import fastify from 'fastify'
import { registerUserRoutes } from './routes/create-user.routes'

const app = fastify()

app.register(registerUserRoutes)

export { app }
