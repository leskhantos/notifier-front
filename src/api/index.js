import axios from 'axios'

const Settings={
    host: process.env.NOTIFIER_API_HOST
}
export function setTokenHeaders(token){
    axios.defaults.headers.common['Authorization'] = 'Bearer'+token
}
export function Login(data){
    return axios.post(Settings.host+'/api/login',data)
}