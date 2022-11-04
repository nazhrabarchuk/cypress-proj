/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		'isVisible'(selector: string): Chainable<Element>,
		'isHidden'(selector: string): Chainable<Element>,
		'clickElement'(selector: string): Chainable<HTMLElement>,
		'selectOptionByText'(locator: string, text:string): Chainable<Element>,
		'shouldContainMessage'(locator: string, msg:string): Chainable<Element>,
		'checkToken'(token: string): Chainable<void>
	}
}
