import fastify from 'fastify'
import { registerUserRoutes } from './routes/create-user.routes'
import { createCategoryRoutes } from './routes/create-category.routes'
import { createUserPlaceRoutes } from './routes/create-user-place.routes'
import { createPlaceRoutes } from './routes/create-place.routes'

const app = fastify()

app.register(registerUserRoutes)
app.register(createCategoryRoutes)
app.register(createUserPlaceRoutes)
app.register(createPlaceRoutes)

export { app }
