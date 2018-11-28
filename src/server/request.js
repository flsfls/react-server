import axios from 'axios'

// 之前的写法，一个实例
const instance = axios.create({
  baseURL: 'http://47.95.113.63/ssr'
})

// 现在的写法，一个方法
const createInstance = (req) => axios.create({
  baseURL: 'http://47.95.113.63/ssr',
  headers: {
    cookie: req.get('cookie') || ''
  }
})

export default createInstance