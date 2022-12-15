import { BaseComponent } from '../base.component'

const LOCATORS = {
	ADD_ADDRESS_BUTTON: 'button[aria-label="Add a new address"]',
	ITEM_ADDRESS_BUTTON: 'mat-radio-button.mat-radio-button',
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

	fillAddressForm(
		country: any,
		name: any,
		mobileNumber: any,
		zip: any,
		address: any,
		city: any,
		state: any): void {
		cy.setElementValue(this.locators.ADDRESS_COUNTRY_INPUT, country)
		cy.setElementValue(this.locators.ADDRESS_NAME_INPUT, name)
		cy.setElementValue(this.locators.ADDRESS_MOBILE_NUMBER_INPUT, mobileNumber)
		cy.setElementValue(this.locators.ADDRESS_ZIP_INPUT, zip)
		cy.setElementValue(this.locators.ADDRESS_INPUT, address)
		cy.setElementValue(this.locators.ADDRESS_CITY_INPUT, city)
		cy.setElementValue(this.locators.ADDRESS_STATE_INPUT, state)

		this.submitAddressForm()
	}

	submitAddressForm(): void {
		cy.clickElement(this.locators.ADDRESS_SUBMIT_BUTTON)
	}

	chooseAddressItem(): void {
		cy.clickElement(this.locators.ITEM_ADDRESS_BUTTON)
	}

	completeNewAddressForm(data: any): void {
		this.addNewAddress()
		this.fillAddressForm(
			data.country,
			data.name,
			data.mobileNumber,
			data.zip,
			data.address,
			data.city,
			data.state)
		this.chooseAddressItem()
	}
}

export { BasketAddressComponents }
