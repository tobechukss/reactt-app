import React from 'react'

function Banner({user}) {
    return (
        <div className="banner_body">
            <h2>Welcome {user} to Asgard!</h2>
            <p>You have successfully signed In, </p>
        </div>
    )
}

export default Banner 