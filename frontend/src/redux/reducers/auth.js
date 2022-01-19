import {ADD_USER, LOGIN_USER, LOGOUT_USER, AUTH_FAILED} from '../actionTypes'


const initialState = {
    user: null
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_USER:
            return state
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            }
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case AUTH_FAILED:
            return {
                ...state,
                user: null
            }
        default: return state
    }
}

export default reducer
