import { Router } from 'express'
import { getStories, getStory, getUserStories } from './controller'

const routes = Router()

//get stories, by id, and by user id
routes.get('/stories', getStories)
routes.get('/stories/:id', getStory)
routes.get('/users/:id', getUserStories)

// add, edit, or delete a story
// routes.post('/stories', addStory)
//routes.put('/stories/:id', editStory)
//routes.delete('/stories/:id', deleteStory)

export default routes