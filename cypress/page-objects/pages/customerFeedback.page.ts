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
		cy.get(this.locators.SLIDER).trigger('mousedown', { button: 0 })
			.trigger('mousemove', {
				clientX: 790,
			})
			.trigger('mouseup', { force: true })
	}

	fillFeedbackForm(text: any) {
		cy.setElementValue(this.locators.COMMENT_INPUT, text)
		this.dragFeedbackRate()
		cy.get(this.locators.CAPTCHA_QUESTION_TEXT).then((text1) => {
			let captchaResult = this.calculate(text1.text())
			cy.setElementValue(this.locators.CAPTCHA_RESULT_INPUT, captchaResult)
		})

		this.submitFeedbackForm()
	}

	submitFeedbackForm(): void {
		cy.clickElement(this.locators.SUBMIT_BUTTON)
	}
}

export default new CustomerFeedbackPage()
