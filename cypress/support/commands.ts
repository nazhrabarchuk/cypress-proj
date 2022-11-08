import client from '../fixtures/helpers/client'

Cypress.Commands.add('isVisible', (selector: string) => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', (selector: string) => {
	cy.get(selector).should('not.exist')
})

Cypress.Commands.add('checkToken', (token: string) => {
	cy.window().its('localStorage.token').should('eq', token)
})

Cypress.Commands.add('shouldContainMessage', (locator: string, msg: string) => {
	cy.get(locator).should('contain', msg)
})


Cypress.Commands.add('selectOptionByText', (locator: string, text) => {
	cy.get(locator).click()
	cy.contains(text).click()
})

Cypress.Commands.add('clickElement', (locator: string) => {
	cy.get(locator).click()
})

Cypress.Commands.add('registerAPI', () => {
	client.register()
})

Cypress.Commands.add('loginAPI', () => {
	cy.registerAPI()
	client.logIn()
})
