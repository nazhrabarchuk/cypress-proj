import { BaseComponent } from '../base.component'

const LOCATORS = {
	ADD_ADDRESS_BUTTON: 'button[aria-label="Add a new address"]',
	ITEM_ADDRESS_BUTTON: 'label.mat-radio-label',
	CONTINUE_BUTTON: 'button[aria-label="Proceed to payment selection"]',
	ADDRESS_COUNTRY_INPUT: 'input[data-placeholder="Please provide a country."]',
	ADDRESS_NAME_INPUT: 'input[data-placeholder="Please provide a name."]',
	ADDRESS_MOBILE_NUMBER_INPUT: 'input[data-placeholder="Please provide a mobile number."]',
	ADDRESS_ZIP_INPUT: 'input[data-placeholder="Please provide a ZIP code."]',
	ADDRESS_INPUT: '#address',
	ADDRESS_CITY_INPUT: 'input[data-placeholder="Please provide a city."]',
	ADDRESS_STATE_INPUT: 'input[data-placeholder="Please provide a state."]',
	ADDRESS_SUBMIT_BUTTON: '#submitButton',
}

class BasketAddressComponents extends BaseComponent {

	get locators() {
		return LOCATORS
	}

	addNewAddress(): void {
		cy.clickElement(this.locators.ADD_ADDRESS_BUTTON)
	}

	fillAddressForm(data: any): void {

	}
}

export { BasketAddressComponents }
