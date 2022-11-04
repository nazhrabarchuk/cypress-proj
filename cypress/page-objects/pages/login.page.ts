import { BasePage } from './base.page'

const LOCATORS = {
	LOGIN_EMAIL_INPUT: '#email',
	LOGIN_PASSWORD_INPUT: '#password',
	LOGIN_SUBMIT_BUTTON: 'button#loginButton',
	REGISTRATION_BUTTON: 'a[href="#/register"]',
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


}

export default new LoginPage()
