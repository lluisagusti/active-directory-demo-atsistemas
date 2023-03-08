import React, { useState } from 'react'
import './styles/App.css'
import { PageLayout } from './components/PageLayout'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import Button from 'react-bootstrap/Button'
import { loginRequest } from './authConfig'
import { callMsGraph } from './graph'
import { ProfileData } from './components/ProfileData'
import { AccountData } from './components/AccountData'
import { useCookies } from 'react-cookie'



const ProfileContent = () => {
    const { instance, accounts } = useMsal()
    const [graphData, setGraphData] = useState(null)
    const [cookies, setCookie] = useCookies(['name'])

    function RequestProfileData() {
        instance
            .acquireTokenSilent({
                ...loginRequest,
                account: accounts[0],
            })
            .then((response) => {
                setCookie('accessToken', response.accessToken, { path: '/' })
                console.log('response.accessToken >> ', response.accessToken)
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
                    Request Profile Information
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
    return (
        <PageLayout>
            <MainContent />
        </PageLayout>
    )
}
