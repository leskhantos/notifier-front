import axios from 'axios'

const login = ({ commit }, credentials)=>{
    return axios
        .post('http://10.8.53.92:8080/backend/login', credentials)
        .then(({ data }) => {
            commit('SET_USER_DATA', data)
        })
}
const logout =  ({ commit }) => {
    commit('LOGOUT')
}

export default {
    login,
    logout
}