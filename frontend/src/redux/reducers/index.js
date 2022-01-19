import {combineReducers} from 'redux'
import auth from './auth'
import movies from './movies'
import theatre from './theatre'
import show from './show'
import order from './order'


export default combineReducers({
    auth,
    movies,
    theatre,
    show,
    order
})
