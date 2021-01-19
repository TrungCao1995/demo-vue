import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/'
})

//add a request interceptor
axiosInstance.interceptors.request.use(config => {
    console.log('log from resquest interceptor', config)
    return config
})

//add a response interceptor
axiosInstance.interceptors.response.use(res => {
    console.log('log from response interceptor', res);
    return res
})

export default axiosInstance