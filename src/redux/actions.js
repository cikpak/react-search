import { SET_USERS, SET_FILTER_RESULTS } from './actionsTypes'

export const setUsers = users => ({
    type: SET_USERS,
    payload: users
})

export const setFilterResults = (searchResults, query) => ({
    type: SET_FILTER_RESULTS,
    payload: {searchResults, query}
})