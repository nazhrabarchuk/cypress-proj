import {Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import basketPage from '../../page-objects/pages/basket.page'
import { ADDRESS_DATA, CARD_DATA } from '../../fixtures/dataProvider'
import { NOTIFICATION_MESSAGES } from '../../fixtures/messages'

When(/^I go to last page with products$/, () => {
	homePage.openLastProductsPage()
})
When(/^I add to basket last product item$/, () =>{
	homePage.products.addLastProductItemToBasket()
	homePage.modal.closeSnackBar()
});

When(/^I set max count of product$/, () => {
	basketPage.selectMaxCountOfProductItemAndGetMsg()
})
When(/^I complete basket purchase flow and go to mainPage$/, () => {
	basketPage.basketPurchaseFlow(
		ADDRESS_DATA,
		CARD_DATA,
		NOTIFICATION_MESSAGES.SUCCESSFUL_PURCHASE,
	)
	basketPage.header.clickLogoImg()
})
Then(/^Last product item contain the mark "([^"]*)"$/, (param) => {
	homePage.products.isLastItemOutOfStock(param)
})
