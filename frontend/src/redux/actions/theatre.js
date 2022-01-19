import request from '../../request'
import {getAuthHeaders} from '../../request/auth'
import {GET_THEATRES} from '../actionTypes'


export const listTheatre = (movieId) => dispatch => {
    const headers = getAuthHeaders()
    request.get(`theatres/?movie${movieId}`, headers).then((res) => {
        dispatch({
            type: GET_THEATRES,
            payload: res.data
        })
    })
} 
