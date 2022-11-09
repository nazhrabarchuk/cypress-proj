import { Before, Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import basketPage from '../../page-objects/pages/basket.page'
import client from '../../fixtures/helpers/client'

When(/^I add to basket product with index "([^"]*)"$/, (param1) => {
	homePage.products.clickProductItem(param1)
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
When(/^I set "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" into new Address for delivery$/,
	(param1, param2, param3, param4, param5, param6, param7) => {
		basketPage.address.fillAddressForm(param1, param2, param3, param4, param5, param6, param7)
	})
When(/^I click submit Address form$/, () => {
	basketPage.address.submitAddressForm()
})
When(/^I choose Address$/, () => {
	basketPage.address.chooseAddressItem()
})
When(/^I click continue button$/, function() {
	basketPage.clickContinueButton()
})
When(/^I choose delivery speed and click continue button$/, () => {
	basketPage.delivery.chooseDelivery()
})
