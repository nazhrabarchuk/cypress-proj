import { BaseComponent } from './base.component'

const LOCATORS = {
	SOLD_OUT_ITEM: '.ribbon-sold',
	PRODUCT_ITEMS: 'mat-card.mat-card',
	ITEM_PRICE: '.item-price',
	productItem: (num: any) => `.mat-grid-tile:nth-child(${num}) button`,
}

class ProductsComponent extends BaseComponent {

	get locators() {
		return LOCATORS
	}

	clickProductItemByIndex(num: any): void {
		cy.clickElement(this.locators.productItem(num))
	}

	addLastProductItemToBasket(): void {
		cy.get(this.locators.PRODUCT_ITEMS).last().find('button').click()
	}
	isLastItemOutOfStock(msg:any): void {
		cy.get(this.locators.PRODUCT_ITEMS).last().contains(msg)
	}
}

export { ProductsComponent }
