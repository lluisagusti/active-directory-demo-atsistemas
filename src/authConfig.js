// test meliá multitenant-spa
// clientId: "0db8eef5-205f-4965-aa55-26ba319b3853",
// authority: "https://login.microsoftonline.com/810c4419-8f98-4c1e-91bf-b84d87e3412b",
// redirectUri: "http://localhost:3000"

import { LogLevel } from '@azure/msal-browser'


export const msalConfig = {
    auth: {
        clientId: '10b856ec-6796-44bb-b274-c15992dba7b9',
        authority: 'https://login.microsoftonline.com/810c4419-8f98-4c1e-91bf-b84d87e3412b',
        redirectUri: 'http://localhost:3000'
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true,
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {
                    return
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message)
                        return
                    case LogLevel.Info:
                        console.info(message)
                        return
                    case LogLevel.Verbose:
                        console.debug(message)
                        return
                    case LogLevel.Warning:
                        console.warn(message)
                        return
                    default:
                        return
                }
            }
        }
    }
}

export const loginRequest = {
    scopes: ['profile', 'openid', 'email','User.Read']
}


export const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me'
}
