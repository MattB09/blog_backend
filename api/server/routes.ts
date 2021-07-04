import { Router } from 'express'
import { getStories } from './controller'

const routes = Router()

routes.get('/stories', getStories);

export default routes