/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		'isVisible'(selector: string): Chainable<Element>,

		'isHidden'(selector: string): Chainable<Element>,

		'clickElement'(selector: string): Chainable<HTMLElement>,

		'clickElementByText'(text: string): Chainable<HTMLElement>,

		'selectOption'(locator: string, value: any): Chainable<Element>,

		'selectOptionByText'(locator: string, text: string): Chainable<Element>,

		'waitForElementToBeVisible'(selector: string, ms: number): Chainable<Element>,

		'shouldContainText'(locator: string, text: string): Chainable<Element>,

		'isExist'(elementSelector: any): Chainable<boolean>,

		'checkToken'(token: string): Chainable<void>,

		'setElementValue'(locator: string, value: any): Chainable<Element>,
	}
}
