import React from "react"

export const ProfileData = (props) => {
    return (
        <div id="profile-div">

            {console.warn('graphData @ ProfileData >> ', props.graphData)}

            <p></p>
            <p><strong>Id: </strong> {props.graphData.id}</p>
            <p><strong>Language: </strong> {props.graphData.preferredLanguage}</p>
            <p>...check jwt.ms before finish the workshop.</p>
        </div>
    )
}