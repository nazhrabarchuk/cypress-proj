import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../../page-objects/pages/home.page'
import basketPage from '../../../page-objects/pages/basket.page'


When(/^the user adds a product with the index "([^"]*)" to the cart$/,
	(index) => {
		homePage.products.clickProductItemByIndex(index)
		homePage.header.clickBasketButton()
	})

When(/^the user removes the product from the cart$/, () => {
	basketPage.removeItemFromBasket()
})

When(/^the user wants to purchase the product$/, () => {
	basketPage.clickCheckoutButton()
})

When(/^the user adds a new delivery Address and choose them$/,
	(table: any) => {
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

When(/^the user adds a new payment card and choose them$/,
	(table: any) => {
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

Then(/^the cart should be empty$/, () => {
	basketPage.basketEmpty()
})

Then(/^the message "([^"]*)" is shown on the page$/,
	(msg) => {
		basketPage.summary.successfulPurchaseMsg(msg)
	})
