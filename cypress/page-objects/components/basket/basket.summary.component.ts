import { BaseComponent } from '../base.component'

const LOCATORS = {
	COMPLETE_PURCHASE_BUTTON: 'button[aria-label="Complete your purchase"]',
	CONFIRMATION_ELEMENT: 'h1.confirmation',
}

class BasketSummaryComponent extends BaseComponent {

	get locators() {
		return LOCATORS
	}

	completePurchase(): void {
		cy.clickElement(this.locators.COMPLETE_PURCHASE_BUTTON)
	}

	successfulPurchaseMsg(msg: any): void {
		cy.shouldContainText(this.locators.CONFIRMATION_ELEMENT, msg)
	}
}

export { BasketSummaryComponent }
