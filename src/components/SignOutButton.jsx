import React from "react"
import { useMsal } from "@azure/msal-react"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"


export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogoutPopup = () => {
        instance.logoutPopup({
            postLogoutRedirectUri: "/",
            mainWindowRedirectUri: "/"
        })
    }

    const handleLogoutRedirect = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: "/",
        })
    }

    
    return (
        <DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign Out">
            <Dropdown.Item as="button" onClick={() => handleLogoutPopup()}>Sign out using Popup</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleLogoutRedirect()}>Sign out using Redirect</Dropdown.Item>
        </DropdownButton>
    )
}