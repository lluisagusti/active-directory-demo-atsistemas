# Azure Active Directory Demo @ atSistemas by Lluis Agustí

## ✅ Requirements

- [NPM](https://www.npmjs.com/)
- [Node 18.13.0 (LTS)](https://nodejs.org/)
- [Microsot Outlook or Azure Corporative Mail Address](https://www.outlook.com/)

> This projects asumes the Node version is `v18.13.0` (Jan 2023).

#### 1️⃣ Install dependencies
```zsh
$yarn install
```

#### 2️⃣ Register application and set authConfig file
- Register our application @ Azure Portal as an SPA.
- Copy the `clientId`, add `authority` and `redirectUri` in the `authConfig.js`.
- By default the scope at login request is `['User.Read']`

#### 3️⃣ Start the dev mode

```zsh
$yarn start
```
