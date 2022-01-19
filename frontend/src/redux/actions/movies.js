import request from '../../request'
import {getAuthHeaders} from '../../request/auth'
import {LIST_MOVIES} from '../actionTypes'


export const listMovies = () => dispatch => {
    const headers = getAuthHeaders()
    return request.get('movies/', headers).then((res) => {
        dispatch({
            type: LIST_MOVIES,
            payload: res.data
        })
    })
} 
