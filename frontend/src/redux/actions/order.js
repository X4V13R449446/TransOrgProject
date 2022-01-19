import request from '../../request'
import {getAuthHeaders} from '../../request/auth'
import {ADD_ORDER, LIST_ORDER, GET_ORDER} from '../actionTypes'


export const addOrder = (data) => dispatch => {
    const headers = getAuthHeaders()
    return request.post('orders/', data, headers).then((res) => {
        dispatch({
            type: ADD_ORDER,
            payload: res.data
        })
    })
} 

export const listOrder = () => dispatch => {
    const headers = getAuthHeaders()
    request.get('orders/', headers).then((res) => {
        dispatch({
            type: LIST_ORDER,
            payload: res.data
        })
    })
} 

export const getOrder = (orderId) => dispatch => {
    const headers = getAuthHeaders()
    request.get(`orders/${orderId}`, headers).then((res) => {
        dispatch({
            type: GET_ORDER,
            payload: res.data
        })
    })
} 
