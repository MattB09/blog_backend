import express from 'express'
import {Request, Response} from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
require('dotenv').config()
import routes from './routes'

const app = express()

const allowedOrigins = ['http://localhost:3000', 'https://next-js-tailwind-three.vercel.app', 'https://next-js-tailwind-mtgtalz51-mattb09.vercel.app']

app.use(cors({
  origin: function(origin: string | undefined, callback: Function){
    //allow requests with no origin
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },

  credentials: true
}))

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

app.get('/', (req: Request, res: Response) => {
  res.json('hello');
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=> {
  console.log(`Server listening at localhost:${PORT}`)
});