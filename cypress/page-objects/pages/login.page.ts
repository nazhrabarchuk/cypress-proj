import { BasePage } from './base.page'

const LOCATORS = {
	LOGIN_EMAIL_INPUT: '#email',
	LOGIN_PASSWORD_INPUT: '#password',
	LOGIN_SUBMIT_BUTTON: 'button#loginButton',
	REGISTRATION_BUTTON: 'a[href="#/register"]',
	ERROR_TEXT_ELEMENT: '.error',
}

class LoginPage extends BasePage<LoginPage> {
	constructor() {
		super('#/login')
	}

	get locators() {
		return LOCATORS
	}

	clickRegistrationButton(): void {
		cy.clickElement(this.locators.REGISTRATION_BUTTON)
	}

	login(email: any, password: any): void {
		this.setElementValue(this.locators.LOGIN_EMAIL_INPUT, email)
		this.setElementValue(this.locators.LOGIN_PASSWORD_INPUT, password)
	}

	submitLogIn(locator = this.locators.LOGIN_SUBMIT_BUTTON): void {
		this.clickElement(locator)
	}

	errorLoginMsg(msg: any): void {
		cy.shouldContainText(this.locators.ERROR_TEXT_ELEMENT, msg)
	}

}

export default new LoginPage()
