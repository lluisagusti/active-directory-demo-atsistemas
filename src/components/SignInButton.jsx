import React from "react"
import { useMsal } from "@azure/msal-react"
import { loginRequest } from "../authConfig"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"


export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLoginPopup = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.log(e)
        })
    }

    const handleLoginRedirect = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.log(e)
        })
    }

    return (
        <DropdownButton variant="secondary" className="ml-auto" drop="start" title="Sign In">
            <Dropdown.Item as="button" onClick={() => handleLoginPopup()}>Sign in using Popup</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleLoginRedirect()}>Sign in using Redirect</Dropdown.Item>
        </DropdownButton>
    )
}