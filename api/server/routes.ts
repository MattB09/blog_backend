import { Router } from 'express'
import { getStories, getStory, getUserStories } from './controller'

const routes = Router()

//
routes.get('/stories', getStories)

routes.get('/stories/:id', getStory)

routes.get('/users/:id', getUserStories)

export default routes