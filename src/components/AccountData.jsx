import React from "react"

export const AccountData = (props) => {
    return (
        <div id="profile-div">

            {console.warn('accountData @ AccountData >> ', props.accountData)}

            <p></p>
            <p><strong>Email: </strong> {props.accountData.username}</p>
            <p><strong>Name: </strong> {props.accountData.name}</p>
            <p><strong>Environment: </strong> {props.accountData.environment}</p>
        </div>
    )
}