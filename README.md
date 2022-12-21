### Cypress Demo Framework for Web Testing

Cypress implementation with Cucumber and Page Object Model using TypeScript.

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

### Environment

- Windows

### Dependency

- node
- npm

### Libraries Used.

- cypress
- cypress-cucumber-preprocessor
- esbuild
- prettier

### Techniques used

- Page Object Model
- BDD (Cucumber)
- Custom Commands
- REST API testing (GET, POST, PUT, PATCH & DELETE)
- Test Tags

### How to install

- Clone the repository
- Go to the project root folder (i.e. cypress-proj)
- run the command ```npm install```

### How to run

a. Set default configuration

- replace `baseUrl` property with your testing project url in file```cypress.config.js```

b. Headless mode

- run the command ```npm run cy:run```

c. Running from the `Test Runner`

- run the command ```npm run cy:open``` and click on the required feature files

d. Generate` html report`

- run the command ```npm run generate-report```

e. Open report in browser

- run the command ```npm run open-report```
