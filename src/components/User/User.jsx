/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons'


export default function User({ name, email, phone }) {
    return (
        <div className='user-card' css={css`
                padding: 10px;
                margin: 10px;
                flex-basis: 245px;
                box-shadow: 0px 2px 26px -7px rgba(0,0,0,0.48);
            `}
        >
            <img src="https://picsum.photos/200/200" alt="user avatar" css={css`display: block; margin:auto;`} />

            <h3 css={css`text-align: center;`}>
                {name}
            </h3>

            <div className='contact-element'>
                <FontAwesomeIcon icon={faPhone} css={css`margin-right: 10px`} />
                {phone}
            </div>
            <div className='contact-element'>
                <FontAwesomeIcon icon={faAt} css={css`margin-right: 10px`} />
                {email}
            </div>
            
        </div>
    )
}
