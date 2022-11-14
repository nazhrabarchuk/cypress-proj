import { Before, Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import basketPage from '../../page-objects/pages/basket.page'


When(/^I go to last page with products and click last item$/, () => {
	homePage.openLastProductsPage()
	homePage.products.addLastProductItemToBasket()
	homePage.modal.closeSnackBar()
})
When(/^I set max count of product and get message "([^"]*)"$/, (param) => {
	basketPage.selectMaxCountOfProductItemAndGetMsg()
	// basketPage.modal.notificationShouldBeVisible(param)
	// cy.log(`selectMaxCountOfProductItemAndGetMsg = ${basketPage.selectMaxCountOfProductItemAndGetMsg(param)}`)
})
