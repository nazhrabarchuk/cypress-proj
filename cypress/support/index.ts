/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		'isVisible'(selector: string): Chainable<Element>,

		'isHidden'(selector: string): Chainable<Element>,

		'clickElement'(selector: string): Chainable<HTMLElement>,

		'clickElementByText'(text: string): Chainable<HTMLElement>,

		'selectOption'(locator: string, value: any): Chainable<Element>,

		'selectOptionByText'(locator: string, text: string): Chainable<Element>,

		'shouldContainText'(locator: string, text: string): Chainable<Element>,

		'checkToken'(token: string): Chainable<void>,

		'setElementValue'(locator: string, value: any): Chainable<Element>,
	}
}
