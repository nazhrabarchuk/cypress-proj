import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import basketPage from '../../page-objects/pages/basket.page'

When(/^I add to basket product with index "([^"]*)"$/, (param1) => {
	homePage.products.clickProductItemByIndex(param1)
})
When(/^I click basket button$/, () => {
	homePage.header.clickBasketButton()
})
When(/^Basket shouldn't be empty$/, () => {
	basketPage.basketNotEmpty()
})
When(/^I click remove item from basket button$/, () => {
	basketPage.removeItemFromBasket()
})
Then(/^Basket should be empty$/, () => {
	basketPage.basketEmpty()
})
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
			row.state)
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
When(/^I set "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" into Payment card form$/,
	(param1, param2, param3, param4) => {
		basketPage.payment.fillPaymentCardForm(param1, param2, param3, param4)
	})
When(/^I set creds into Payment card form$/, (table: any) => {
	table.hashes().forEach((row: any) => {
		basketPage.payment.fillPaymentCardForm(
			row.name,
			row.cardNumber,
			row.month,
			row.year,
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
