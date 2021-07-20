import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://ec2-52-198-41-189.ap-northeast-1.compute.amazonaws.com:4000';

const instance = axios.create({
  baseURL: API_URL
})

export default instance