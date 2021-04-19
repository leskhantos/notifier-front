const getToken = state =>state.token
const getUser = state =>state.user
const loggedIn = state =>!!state.user
export default {
    getToken, getUser, loggedIn
}