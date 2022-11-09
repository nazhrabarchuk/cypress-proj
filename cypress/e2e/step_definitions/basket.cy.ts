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
Given(/^I click remove item from basket button$/, () => {
	basketPage.removeItemFromBasket()
})
Then(/^Basket should be empty$/, () => {
	basketPage.basketEmpty()
})
When(/^I click checkout button$/, () => {
	basketPage.clickCheckoutButton()
})

When(/^I set new Address for delivery and click continue$/, () => {
	basketPage.address.addNewAddress()
})
