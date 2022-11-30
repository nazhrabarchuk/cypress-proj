import { BasePage } from './base.page'
import { BasketAddressComponents } from '../components/basket/basket.address.components'
import { BasketDeliveryComponent } from '../components/basket/basket.delivery.component'
import { BasketPaymentComponent } from '../components/basket/basket.payment.component'
import { BasketSummaryComponent } from '../components/basket/basket.summary.component'

const LOCATORS = {
	BASKET_ITEMS: 'mat-row.mat-row',
	REMOVE_ITEM_BUTTON: '.cdk-column-remove button',
	BASKET_CHECKOUT_BUTTON: '#checkoutButton',
	PLUS_COUNT_ITEM_BUTTON: '.mat-icon-button.mat-button-base.ng-star-inserted:last-child',
	CONTINUE_BUTTON: 'button.nextButton',
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

	get delivery() {
		return new BasketDeliveryComponent()
	}

	get payment() {
		return new BasketPaymentComponent()
	}

	get summary() {
		return new BasketSummaryComponent()
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

	clickContinueButton(): void {
		cy.clickElementByText(' navigate_next ')
	}

	clickPlusCountItem(): void {
		cy.clickElement(this.locators.PLUS_COUNT_ITEM_BUTTON)
	}

	selectMaxCountOfProductItemAndGetMsg() {
		cy.isExist(this.modal.locators.MODAL_NOTIFICATION_MESSAGE).then((exists) => {
			if (!exists) {
				cy.wait(300)
				this.clickPlusCountItem()
				this.selectMaxCountOfProductItemAndGetMsg()
			}
		})
	}

	basketPurchaseFlow(addressData: any, cardData: any, msg: any): void {
		this.address.completeNewAddressForm(addressData)
		this.clickContinueButton()
		this.delivery.chooseDelivery()
		this.clickContinueButton()
		this.payment.completePaymentCardForm(cardData)
		this.clickContinueButton()
		this.summary.completePurchase()
		this.summary.successfulPurchaseMsg(msg)
	}
}

export default new BasketPage()
