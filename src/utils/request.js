import axios from 'axios'
axios.defaults.withCredentials = true

// import { getToken } from '@/utils/auth'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 45000
})

// request拦截器
// Authorization:	_token 74b1a5f165dc4e27aa0c032a5f08e6d0
service.interceptors.request.use(
    config => {
      // if (store.getters.token) {
      //   config.headers['Authorization'] = `_token ` + getToken() // 让每个请求携带自定义token
      // }
      return config
    },
    error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    }
)

export default service



// var token = "cy-j=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEzMjAwNjMsInRva2VuIjoiMDFlZjI2NWY2MDg2NGVhZGI3MWY1YTJhOWIzYzQ4MzciLCJpYXQiOjE1NTc0ODczNzN9.6jPQKRZGOuRP7CdJceQL4sJimFTeJ7jZH6x-h87_y30";
// var expire = new Date();
// expire.setDate(expire.getDate() + 7);
// document.cookie =  token + ";expires=" + expire.toGMTString();
