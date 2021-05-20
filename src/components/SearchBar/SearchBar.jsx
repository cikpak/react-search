/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { connect } from 'react-redux'
import { setFilterResults } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import { searchUsersFilter } from '../../utils/usersFilter'

const SearchBar = ({ users, setFilterResults, filter }) => {
    const history = useHistory()

    const searchHandler = (event) => {
        const query = event.target.value

        //update query parameter in url
        const params = new URLSearchParams()
        if (query !== '' && query) {
            params.append('query', query)
        } else {
            params.delete('query')
        }
        history.push({ search: params.toString() })

        const searchResult = searchUsersFilter(query)

        setFilterResults(searchResult, query)
    }

    const clearSearchHandler = () => {
        setFilterResults(users, '')
    }

    return (
        <>
            <input
                css={
                    css`
                padding: 10px;
                height: 30px;
                width: 500px;
                font-size: 16px;
                border: 1px solid #6C757D;
                border-right: none;
                `}
                placeholder='Type to search by name...'
                value={filter.query}
                onChange={searchHandler}
            />

            <button
                css={css`
                        height: 52px;
                        width: 80px;
                        background-color: #F9FAFB; 
                        font-weight: 500;
                        font-size: 14px;
                        border: 1px solid #6C757D;

                        &:hover{
                            cursor: pointer;
                            background-color: #6C757D;
                            color: white;
                        }
                    `}
                onClick={clearSearchHandler}
            >
                Clear
                </button>
        </>
    );
}


const mapStateToProps = (state) => ({
    users: state.users.users,
    filter: state.filter
})

const mapDispatchToProps = {
    setFilterResults
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
