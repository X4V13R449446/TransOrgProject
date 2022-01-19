import request from '../../request'
import {getAuthHeaders} from '../../request/auth'
import {LIST_SHOWS} from '../actionTypes'


export const listShows = (movieId, theatreId) => dispatch => {
    const headers = getAuthHeaders()
    request.get(`theatres/show/?movie=${movieId}&theatre=${theatreId}`, headers).then((res) => {
        console.log('Got resp on list', res)
        dispatch({
            type: LIST_SHOWS,
            payload: res.data
        })
    })
} 
