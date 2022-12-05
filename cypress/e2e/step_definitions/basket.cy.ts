import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import basketPage from '../../page-objects/pages/basket.page'


When(/^the user adds a product with the index "([^"]*)" to the cart$/, (index) => {
	homePage.products.clickProductItemByIndex(index)
})
When(/^the user removes the product from the cart$/, () => {
	homePage.header.clickBasketButton()
	basketPage.removeItemFromBasket()
})
Then(/^the cart should be empty$/, () => {
	basketPage.basketEmpty()
})
//

When(/^I click checkout button$/, () => {
	basketPage.clickCheckoutButton()
})
When(/^I click add new Address button$/, () => {
	basketPage.address.addNewAddress()
})
When(/^I set creds into new Address for delivery$/, (table: any) => {
	table.hashes().forEach((row: any) => {
		basketPage.address.fillAddressForm(
			row.country,
			row.name,
			row.mobileNumber,
			row.zip,
			row.address,
			row.city,
			row.state,
		)
	})
})

When(/^I click submit Address form$/, () => {
	basketPage.address.submitAddressForm()
})
When(/^I choose Address$/, () => {
	basketPage.address.chooseAddressItem()
})
When(/^I click continue button$/, () => {
	basketPage.clickContinueButton()
})
When(/^I choose delivery speed and click continue button$/, () => {
	basketPage.delivery.chooseDelivery()
})
When(/^I click add new payment card$/, () => {
	basketPage.payment.addNewPaymentCard()
})

When(/^I set creds into Payment card form$/, (table: any) => {
	table.hashes().forEach((row: any) => {
		basketPage.payment.fillPaymentCardForm(
			row.name, row.cardNumber, row.month, row.year,
		)
	})
})
When(/^I click submit Payment form$/, () => {
	basketPage.payment.submitPaymentCardForm()
})
When(/^I choose payment card$/, () => {
	basketPage.payment.choosePaymentCardItem()
})
When(/^I click complete purchase button$/, () => {
	basketPage.summary.completePurchase()
})
Then(/^I see successful purchase message "([^"]*)"$/, (param) => {
	basketPage.summary.successfulPurchaseMsg(param)
})
//

When(/^the user wants to purchase the product$/, () => {
	basketPage.clickCheckoutButton()
})
When(/^the user adds a new delivery Address and choose them$/, (table: any) => {
	basketPage.address.addNewAddress()
	table.hashes().forEach((row: any) => {
		basketPage.address.fillAddressForm(
			row.country,
			row.name,
			row.mobileNumber,
			row.zip,
			row.address,
			row.city,
			row.state,
		)
	})
	basketPage.address.chooseAddressItem()
	basketPage.clickContinueButton()
})
When(/^the user choose delivery speed$/, () => {
	basketPage.delivery.chooseDelivery()
	basketPage.clickContinueButton()
})
When(/^the user adds a new payment card and choose them$/, (table: any) => {
	basketPage.payment.addNewPaymentCard()
	table.hashes().forEach((row: any) => {
		basketPage.payment.fillPaymentCardForm(
			row.name, row.cardNumber, row.month, row.year,
		)
	})
	basketPage.payment.choosePaymentCardItem()
	basketPage.clickContinueButton()
})
When(/^the user submit purchase$/, () => {
	basketPage.summary.completePurchase()
})
Then(/^the message "([^"]*)" is shown on the page$/, (msg) => {
	basketPage.summary.successfulPurchaseMsg(msg)
})
