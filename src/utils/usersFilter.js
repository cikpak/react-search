import store from '../redux/store'

export const searchUsersFilter = (query) => {
    const users = store.getState().users
    const searchRegex = new RegExp(query, 'i')

    return users.users.filter(user => user.name.search(searchRegex) !== -1)
}