import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' : '';

const instance = axios.create({
  baseURL: API_URL
})

export default instance