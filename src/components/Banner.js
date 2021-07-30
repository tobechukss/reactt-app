import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'

function Banner({user, toggle}) {
    return (
        <div className="banner_body">
            <div className="close_icon" onClick={toggle}>
                <CloseIcon />
            </div>
            <h2>Welcome {user} to Asgard!</h2>
            <p>You have successfully signed In, </p>
        </div>
    )
}

export default Banner 