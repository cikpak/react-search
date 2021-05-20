import { combineReducers } from 'redux'
// import filterReducer from './filterReducer'
import usersReducer from './usersReducer'
import searchFilterReducer from './searchFilterReducer'


export default combineReducers({
    users: usersReducer,
    filter: searchFilterReducer
})