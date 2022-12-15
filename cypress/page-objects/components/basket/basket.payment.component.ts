import { BaseComponent } from '../base.component'

const LOCATORS = {
	NEW_CARD_ELEMENT: '.mat-expansion-panel:first-child .mat-expansion-panel-header:first-child',
	NEW_CARD_NAME_INPUT: '.ng-star-inserted.mat-expanded .mat-form-field input[type="text"]',
	NEW_CARD_NUMBER_INPUT: '.mat-form-field-infix input[type="number"]',
	NEW_CARD_EXPIRY_MONTH_DROPDOWN:
		'.mat-form-field-has-label:nth-child(3) select.mat-input-element:first-child',
	NEW_CARD_EXPIRY_YEAR_DROPDOWN:
		'.mat-form-field-has-label:nth-child(4) select.mat-input-element:first-child',
	ITEM_CARD_BUTTON: '.mat-row.cdk-row:last-child label',
	SUBMIT_BUTTON: '#submitButton',
}

class BasketPaymentComponent extends BaseComponent {

	get locators() {
		return LOCATORS
	}

	addNewPaymentCard(): void {
		cy.clickElement(this.locators.NEW_CARD_ELEMENT)
	}

	fillPaymentCardForm(
		name: any,
		cardNumber: any,
		month: any,
		year: any,
	): void {
		cy.setElementValue(this.locators.NEW_CARD_NAME_INPUT, name)
		cy.setElementValue(this.locators.NEW_CARD_NUMBER_INPUT, cardNumber)
		cy.selectOption(this.locators.NEW_CARD_EXPIRY_MONTH_DROPDOWN, month)
		cy.selectOption(this.locators.NEW_CARD_EXPIRY_YEAR_DROPDOWN, year)

		this.submitPaymentCardForm()
	}

	submitPaymentCardForm(): void {
		cy.clickElement(this.locators.SUBMIT_BUTTON)
	}

	choosePaymentCardItem(): void {
		cy.clickElement(this.locators.ITEM_CARD_BUTTON)
	}

	completePaymentCardForm(data: any): void {
		this.addNewPaymentCard()
		this.fillPaymentCardForm(
			data.name,
			data.cardNumber,
			data.month,
			data.year,
		)
		this.choosePaymentCardItem()
	}
}

export { BasketPaymentComponent }
