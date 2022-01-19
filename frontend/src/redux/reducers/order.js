import {ADD_ORDER, LIST_ORDER, GET_ORDER} from '../actionTypes'

const initialState = {
    orders: [],
    detailed: null
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,
                orders : [action.payload, ...state.orders],
                detailed: action.payload
            }
        case LIST_ORDER:
            return{
                ...state,
                orders: action.payload
            }
        case GET_ORDER:
            return {
                ...state,
                detailed: action.payload
            }
        default : return state
    }
}

export default reducer
