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

	clickProductItem(num: any) {
		cy.clickElement(this.locators.productItem(num))
	}
}

export { ProductsComponent }
