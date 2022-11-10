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

Cypress.Commands.add('selectOption', (locator: string, value: any) => {
	cy.get(locator).select(value)
})
Cypress.Commands.add('selectOptionByText', (locator: string, text) => {
	cy.get(locator).click()
	cy.contains(text).click()
})

Cypress.Commands.add('clickElement', (locator: string) => {
	cy.get(locator).click()
})

Cypress.Commands.add('clickElementByText', (text: string) => {
	cy.contains(text).click()
})


Cypress.Commands.add('setElementValue', (locator: string, value: any) => {
	cy.get(locator).type(value)
})
