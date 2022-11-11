import { BasePage } from './base.page'

const LOCATORS = {
	COMMENT_INPUT: '#comment',
	CAPTCHA_QUESTION_TEXT: '#captcha',
	CAPTCHA_RESULT_INPUT: '#captchaControl',
	SUBMIT_BUTTON: '#submitButton',
	SLIDER: '.mat-slider-thumb-label-text',
}

class CustomerFeedbackPage extends BasePage<CustomerFeedbackPage> {
	constructor() {
		super('/#/contact')
	}

	get locators() {
		return LOCATORS
	}

	dragFeedbackRate(): void {
		const dataTransfer = new DataTransfer()
		cy.get(this.locators.SLIDER).trigger('mousedown', { button: 0 })
			.trigger('mousemove', {
				clientX: 450,
			})
			.trigger('mouseup', { force: true })
	}

	async getCaptchaResult(): Promise<number> {
		let text = await new Cypress.Promise<string>((resolve) => {
			cy.waitForElementToBeVisible(this.locators.CAPTCHA_QUESTION_TEXT, 10000)
			cy.get(this.locators.CAPTCHA_QUESTION_TEXT).invoke('text')
				.then((txt) =>
					resolve(txt.toString()))
		})
		return this.calculate(text)
	}

	async fillFeedbackForm(text: any): Promise<void> {
		cy.setElementValue(this.locators.COMMENT_INPUT, text)
		this.dragFeedbackRate()
		cy.setElementValue(this.locators.CAPTCHA_RESULT_INPUT, await this.getCaptchaResult())
	}

	submitFeedbackForm(): void {
		cy.clickElement(this.locators.SUBMIT_BUTTON)
	}
}

export default new CustomerFeedbackPage()
