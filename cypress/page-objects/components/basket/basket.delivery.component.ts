import { BaseComponent } from '../base.component'

const LOCATORS = {
	STANDARD_DELIVERY_BUTTON: '.mat-row.cdk-row:last-child',
}

class BasketDeliveryComponent extends BaseComponent {

	get locators() {
		return LOCATORS
	}

	chooseDelivery(): void {
		cy.clickElement(this.locators.STANDARD_DELIVERY_BUTTON)
	}
}

export { BasketDeliveryComponent }
