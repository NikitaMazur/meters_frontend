import {combineReducers} from 'redux'
import auth from './auth'
import meters from './meters'

export default combineReducers({
    auth,
    meters,
})