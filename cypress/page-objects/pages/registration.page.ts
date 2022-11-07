import { BasePage } from './base.page'
import { REGISTRATION_DATA } from '../../fixtures/dataProvider'

const LOCATORS = {
	REGISTRATION_EMAIL_INPUT: '#emailControl',
	REGISTRATION_PASSWORD_INPUT: '#passwordControl',
	REGISTRATION_REPEAT_PASSWORD_INPUT: '#repeatPasswordControl',
	REGISTRATION_SECURITY_ANSWER_INPUT: '#securityAnswerControl',
	REGISTRATION_SECURITY_QUESTION_DROPDOWN: '[name="securityQuestion"]',
	REGISTRATION_SUBMIT_BUTTON: 'button#registerButton',
	ERROR_REGISTRATION_TEXT_ELEMENT: 'mat-error.mat-error',
}

class RegistrationPage extends BasePage<RegistrationPage> {
	constructor() {
		super('#/register')
	}

	get locators() {
		return LOCATORS
	}

	get data() {
		return REGISTRATION_DATA
	}

	clickSubmitRegisterButton(): void {
		cy.clickElement(this.locators.REGISTRATION_SUBMIT_BUTTON)
	}

	errorRegistrationMsg(msg: any): void {
		cy.shouldContainMessage(this.locators.ERROR_REGISTRATION_TEXT_ELEMENT, msg)
	}

	fillRegistrationForm(
		email: any,
		password: any,
		password2: any,
		securityQuestion: any,
		securityAnswer: any): void {
		this.setElementValue(this.locators.REGISTRATION_EMAIL_INPUT, email)
		this.setElementValue(this.locators.REGISTRATION_PASSWORD_INPUT, password)
		this.setElementValue(this.locators.REGISTRATION_REPEAT_PASSWORD_INPUT, password2)
		cy.selectOptionByText(this.locators.REGISTRATION_SECURITY_QUESTION_DROPDOWN, securityQuestion)
		this.setElementValue(this.locators.REGISTRATION_SECURITY_ANSWER_INPUT, securityAnswer)

	}
}

export default new RegistrationPage()
