import { useEffect } from 'react';
import { setUsers, setFilterResults } from '../redux/actions'
import { connect } from 'react-redux'
import axios from 'axios'
import { searchUsersFilter } from '../utils/usersFilter'

import SearchInput from '../components/SearchBar/SearchBar.jsx'
import UsersList from '../components/UsersList/UsersList'

const Users = ({ setUsers, setFilterResults, location }) => {
    
    useEffect(() => {
        const url = 'http://jsonplaceholder.typicode.com/users'

        axios({
            url
        })
            .then(response => {
                if (response.statusText === 'OK') {
                    setUsers(response.data)

                    //get query parameter from url
                    const query = new URLSearchParams(location.search).get('query')

                    if (query !== '' && query) {

                        const searchResult = searchUsersFilter(query)
                        setFilterResults(searchResult, query)
                    } else {
                        setFilterResults(response.data)
                    }
                } else {
                    console.log('Failed to fetch!')
                }
            })
            .catch(err => {
                console.log(`err`, err)
            })
    }, [])


    return (
        <div id="app">
            <div id='search-wrapper'>
                <SearchInput />
            </div>

            <div className='users-list-wrapper'>
                <UsersList />
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    setUsers,
    setFilterResults
}

export default connect(() => ({}), mapDispatchToProps)(Users);