import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../../page-objects/pages/home.page'
import aboutUsPage from '../../../page-objects/pages/aboutUs.page'
import facebookPage from '../../../page-objects/pages/facebook.page'


When(/^the user navigates to About Us page$/,
	() => {
	homePage.header.clickBurgerButton()
	homePage.sideBar.clickAboutULink()
})

When(/^the user select Facebook social-media link$/,
	() => {
	aboutUsPage.clickSocialFacebookButton()
})

Then(/^the Facebook page with title "([^"]*)" is displayed$/,
	(title) => {
	facebookPage.clickReloadPage()
	facebookPage.profileTitleShouldExistWithText(title)
})
