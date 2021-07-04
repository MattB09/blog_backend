import pool from './db/index'
import { Request, Response} from 'express'

const DEFAULT_LIMIT = 12

const getStories = async (req: Request, res: Response) => {
  let page: number = Number(req.query.page) || 1
  let limit: number = Number(req.query.limit) || DEFAULT_LIMIT
  let offset: number = (page - 1) * limit
  let total = await pool.query('SELECT count(*) FROM stories')
  let result = await pool.query('SELECT stories.*, users.email, users.avatar_color FROM stories \ JOIN users ON stories.user_id = users.id ORDER BY date_added DESC \ LIMIT $1 OFFSET $2', [limit, offset])

  let pages = Math.ceil(Number(total.rows[0].count) / limit)

  return res.status(200).json({
    total: {stories: total.rows[0].count, pages}, 
    page,
    rows: result.rows 
  });
}

export { getStories }