import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import App from './App'
import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import { msalConfig } from './authConfig'
import { CookiesProvider } from 'react-cookie'

const msalInstance = new PublicClientApplication(msalConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <React.StrictMode>
        <CookiesProvider>
            <MsalProvider instance={msalInstance}>
                <App />
            </MsalProvider>
        </CookiesProvider>
    </React.StrictMode>
);
