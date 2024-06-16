import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, LOGOUT, LOGIN } from "./actionType"

import axios from "axios"

const login = (payload) => (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST })
    return axios.post(`https://reqres.in/api/login`,
        payload).then(
            (res) => {
                dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.token })
            }).catch(
                (e) => {
                    dispatch({ type: USER_LOGIN_ERROR })
                })
}

const logout = () => ({
    type: LOGOUT,
});
export { login, logout }