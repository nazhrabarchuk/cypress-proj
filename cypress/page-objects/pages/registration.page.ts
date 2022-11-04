import { BasePage } from './base.page'

const LOCATORS = {
	REGISTRATION_EMAIL_INPUT: '#emailControl',
	REGISTRATION_PASSWORD_INPUT: '#passwordControl',
	REGISTRATION_REPEAT_PASSWORD_INPUT: '#repeatPasswordControl',
	REGISTRATION_SECURITY_ANSWER_INPUT: '#securityAnswerControl',
	REGISTRATION_SECURITY_QUESTION_DROPDOWN: '[name="securityQuestion"]',
	REGISTRATION_SUBMIT_BUTTON: 'button#registerButton',
	ERROR_REGISTRATION_TEXT_ELEMENT: '.mat-error',
}

class RegistrationPage extends BasePage<RegistrationPage> {
	constructor() {
		super('#/register')
	}

	get locators() {
		return LOCATORS
	}

	clickSubmitRegisterButton(): void {
		cy.clickElement(this.locators.REGISTRATION_SUBMIT_BUTTON)
	}

	fillRegistrationForm(): void {
		cy.fixture('registration-data').then(data => {
			this.setElementValue(this.locators.REGISTRATION_EMAIL_INPUT, data.email)
			this.setElementValue(this.locators.REGISTRATION_PASSWORD_INPUT, data.password)
			this.setElementValue(this.locators.REGISTRATION_REPEAT_PASSWORD_INPUT, data.password)
			cy.selectOptionByText(this.locators.REGISTRATION_SECURITY_QUESTION_DROPDOWN, data.securityQuestion)
			this.setElementValue(this.locators.REGISTRATION_SECURITY_ANSWER_INPUT, data.securityAnswer)
		})
	}
}

export default new RegistrationPage()
