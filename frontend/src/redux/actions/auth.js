import {ADD_USER, LOGIN_USER, LOGOUT_USER, AUTH_FAILED} from '../actionTypes'
import request from '../../request'
import {setToken, getAuthHeaders, removeToken, getToken} from '../../request/auth'


export const addUser = (data) => dispatch => {
    return request.post('users/register/', data).then(res => {
        dispatch({
            type: ADD_USER,
            payload: res.data
        })
    })
}

export const loginUser = (data, callBack= () => {}) => dispatch => {
    return request.post('users/login/', data).then(res=> {
        setToken(res.data.token)
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
    })
}

export const logoutUser = () => dispatch => {
    return request.post('users/logout/', {}, getAuthHeaders()).finally(res=> {
        console.log('Logout finally block')
        dispatch({
            type: LOGOUT_USER
        })
        removeToken()
        console.log(getToken())
    })
}

export const autoLogin = () => dispatch => {
    const token = getToken()
    console.log('Auto login ', token)
    if (token){
        request.get('users/detail/', getAuthHeaders()).then(res=>{
            dispatch({
                type: LOGIN_USER,
                payload: {user:res.data}
            })
        }).catch(err=> {
            dispatch({
                type: LOGOUT_USER
            })
            removeToken()
        })
        
    }

}
