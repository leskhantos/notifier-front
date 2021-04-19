import axios from 'axios'

const SET_USER_DATA  = (state, userData) => {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
    }`
}
const LOGOUT = () => {
    localStorage.removeItem('user')
    location.reload()
}
export default {
    SET_USER_DATA, LOGOUT
}