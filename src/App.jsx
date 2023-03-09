import React, { useState } from 'react'
import './styles/App.css'
import { PageLayout } from './components/PageLayout'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useIsAuthenticated } from '@azure/msal-react';
import Button from 'react-bootstrap/Button'
import { loginRequest } from './authConfig'
import { callMsGraph } from './graph'
import { ProfileData } from './components/ProfileData'
import { AccountData } from './components/AccountData'


const ProfileContent = () => {
    const { instance, accounts } = useMsal()
    const [graphData, setGraphData] = useState(null)

    function RequestProfileData() {
        instance
            .acquireTokenSilent({
                ...loginRequest,
                account: accounts[0],
            })
            .then((response) => {
                console.log('response @ instance.acquireTokenSilent >> ', response.accessToken)
                callMsGraph(response.accessToken).then((response) => setGraphData(response));
            });
    }

    return (
        <>
            <h5 className="card-title">Hello {accounts[0].name ? accounts[0].name : 'world!'}</h5>
            {graphData ? (<>
                <AccountData accountData={accounts[0]} />
                <ProfileData graphData={graphData} />
            </>) : (
                <Button variant="secondary" onClick={RequestProfileData}>
                    Request Profile Inform ation
                </Button>
            )}
        </>
    )
}


const MainContent = () => {
    return (
        <div className="App">
            <AuthenticatedTemplate>
                <ProfileContent />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h5 className="card-title">Please sign-in to your brand new AD application.</h5>
            </UnauthenticatedTemplate>
        </div>
    )
}

export default function App() {
    const isAuthenticated = useIsAuthenticated()

    const handleClickIsAuthenticated = () => {
        console.log('isAuthenticated', isAuthenticated)
    }

    return (
        <PageLayout>
            <MainContent />
            <button onClick={handleClickIsAuthenticated}>isAuthenticated</button>
        </PageLayout>
    )
}
