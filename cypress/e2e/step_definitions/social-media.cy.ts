import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import aboutUsPage from '../../page-objects/pages/aboutUs.page'
import facebookPage from '../../page-objects/pages/facebook.page'


When(/^I navigate to About Us page$/, () => {
	homePage.header.clickBurgerButton()
	homePage.sideBar.clickAboutULink()
})
When(/^I click social Facebook button$/, () => {
	aboutUsPage.clickSocialFacebookButton()
})
Then(/^I should see Facebook page with title "([^"]*)"$/, (param) => {
	facebookPage.clickReloadPage()
	facebookPage.profileTitleShouldExistWithText(param)
})
