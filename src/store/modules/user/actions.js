import {Login} from '@/api'
const loginTo = ({commit}, payload)=>{
    return Login(payload)
        .then((response)=>{
            const token = response.data
            commit('SET_TOKEN',token)
        }).catch((error)=>{
            console.log(error)
        })
}

export default {
    loginTo
}