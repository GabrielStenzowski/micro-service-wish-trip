import fastify from 'fastify'
import { registerUserRoutes } from './routes/create-user.routes'
import { createCategoryRoutes } from './routes/create-category.routes'

const app = fastify()

app.register(registerUserRoutes)
app.register(createCategoryRoutes)

export { app }
