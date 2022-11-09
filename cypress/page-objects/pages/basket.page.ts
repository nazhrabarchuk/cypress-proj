import { BasePage } from './base.page'
import { BasketAddressComponents } from '../components/basket/basket.address.components'

const LOCATORS = {
	BASKET_ITEMS: 'mat-row.mat-row',
	REMOVE_ITEM_BUTTON: '.cdk-column-remove button',
	BASKET_CHECKOUT_BUTTON: '#checkoutButton',
	PLUS_COUNT_ITEM_BUTTON: '.mat-icon-button.mat-button-base.ng-star-inserted:last-child',
}

class BasketPage extends BasePage<BasketPage> {
	constructor() {
		super('#/basket')
	}

	get locators() {
		return LOCATORS
	}

	get address() {
		return new BasketAddressComponents()
	}

	basketNotEmpty(): void {
		cy.get(this.locators.BASKET_ITEMS).should('have.length', 1)
	}

	basketEmpty(): void {
		cy.get(this.locators.BASKET_ITEMS).should('have.length', 0)
	}

	removeItemFromBasket(): void {
		cy.clickElement(this.locators.REMOVE_ITEM_BUTTON)
	}

	clickCheckoutButton(): void {
		cy.clickElement(this.locators.BASKET_CHECKOUT_BUTTON)
	}
}

export default new BasketPage()
