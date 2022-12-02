import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import basketPage from '../../page-objects/pages/basket.page'
import { ADDRESS_DATA, CARD_DATA } from '../../fixtures/dataProvider'

When(/^the user goes to the last page of product list$/, () => {
	homePage.openLastProductsPage()
})

When(/^the user adds the last item to the cart$/, () => {
	homePage.products.addLastProductItemToBasket()
	homePage.modal.closeSnackBar()
})

When(/^the user sets max quantity of product in basket$/, () => {
	homePage.header.clickBasketButton()
	basketPage.selectMaxCountOfProductItemAndGetMsg()
})

When(/^the user complete purchase with successfully message "([^"]*)"$/, (param) => {
	basketPage.clickCheckoutButton()
	basketPage.basketPurchaseFlow(
		ADDRESS_DATA,
		CARD_DATA,
		param,
	)
	basketPage.header.clickLogoImg()
})

Then(/^the last product item contains the mark "([^"]*)"$/, (param) => {
	homePage.products.isLastItemOutOfStock(param)
})
