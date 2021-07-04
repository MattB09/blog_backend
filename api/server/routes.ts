import { Router } from 'express'
import { getStories, getStory } from './controller'

const routes = Router()

routes.get('/stories', getStories)

routes.get('/stories/:id', getStory)

export default routes