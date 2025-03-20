import fastify from 'fastify'
import { registerUserRoutes } from './routes/create-user.routes'
import { createCategoryRoutes } from './routes/create-category.routes'
import { createUserPlaceRoutes } from './routes/create-user-place.routes'
import { createPlaceRoutes } from './routes/create-place.routes'
import { getUserPlacesRoutes } from './routes/get-user-places.routes'
import { getPlacesRoutes } from './routes/get-places.routes'

const app = fastify()
// const app = fastify({ logger: true })

app.register(registerUserRoutes)
app.register(createCategoryRoutes)
app.register(createUserPlaceRoutes)
app.register(createPlaceRoutes)
app.register(getUserPlacesRoutes)
app.register(getPlacesRoutes)
export { app }
