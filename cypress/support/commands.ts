import client from '../fixtures/helpers/client'

Cypress.Commands.add('isVisible', (selector: string) => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', (selector: string) => {
	cy.get(selector).should('not.exist')
})

Cypress.Commands.add('isExist', (elementSelector) => {
	cy.get('body').should('exist').then(($body) => {
		return new Cypress.Promise((resolve) => {
			if ($body.find(elementSelector).length > 0) {
				cy.log(`cy.exist() - Matching ${elementSelector}  found in DOM!`);
				resolve(true);
			} else {
				cy.log(`cy.exist() - Element ${elementSelector} did not exist!`);
				resolve(false);
			}
		})
	})
})

Cypress.Commands.add('waitForElementToBeVisible', (selector: string, ms: number) => {
	cy.get(selector, { timeout: ms }).should('be.visible')
})


Cypress.Commands.add('checkToken', (token: string) => {
	cy.window().its('localStorage.token').should('eq', token)
})

Cypress.Commands.add('shouldContainText', (locator: string, text: string) => {
	cy.get(locator).should('contain', text)
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
