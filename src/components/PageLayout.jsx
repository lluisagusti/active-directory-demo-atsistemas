import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { useIsAuthenticated } from '@azure/msal-react'
import { SignInButton } from './SignInButton'
import { SignOutButton } from './SignOutButton'


export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated()

    return (
        <>
            <Navbar bg="primary" variant="dark" className="navbarStyle">
                <a className="navbar-brand" href="/">
                    atSistemas Workshop - Active Directory - 9th March 2023
                </a>
                <div className="collapse navbar-collapse justify-content-end">
                    {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                </div>
            </Navbar>
            <br />
            <br />
            {props.children}
        </>
    )
}
