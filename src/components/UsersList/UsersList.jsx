/** @jsxImportSource @emotion/react */
import { connect } from 'react-redux'
import { setUsers } from '../../redux/actions'
import { css } from '@emotion/react'

import User from '../User/User.jsx'


const UsersList = ({ filter }) => {
    return (
        <div
            css={css`
                display: flex;
                flex-flow: wrap;
                justify-content: space-start;
            `}
        >
            {
                filter.searchResults.map(user => {
                    return <User key={user.id} {...user} />
                })
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    filter: state.filter
})

const mapDispatchToProps = {
    setUsers
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersList);