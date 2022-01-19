import {GET_THEATRES} from '../actionTypes'

const initialState = {
    theatres: [],
}

const reducerFunc = (state=initialState, action) => {
    switch (action.type) {
        case GET_THEATRES:
            return {
                ...state,
                theatres : action.payload
            }
        /*
        case CREATE_POST:
            return {
                ...state,
                posts : [action.payload, ...state.posts]
            }
            */
        // case FETCH_POST:
        //     return {
        //         ...state,
        //         detailedView: action.payload
        //     }
        default : return state
    }
}

export default reducerFunc