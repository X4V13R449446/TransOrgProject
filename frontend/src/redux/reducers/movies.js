import {LIST_MOVIES} from '../actionTypes'

const initialState = {
    movies: [],
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case LIST_MOVIES:
            return {
                ...state,
                movies : action.payload
            }
        default : return state
    }
}

export default reducer
