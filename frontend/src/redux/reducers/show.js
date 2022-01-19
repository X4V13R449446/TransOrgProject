import {LIST_SHOWS} from '../actionTypes'

const initialState = {
    shows: [],
}

const reducerFunc = (state=initialState, action) => {
    switch (action.type) {
        case LIST_SHOWS:
            return {
                ...state,
                shows : action.payload
            }
        default : return state
    }
}

export default reducerFunc