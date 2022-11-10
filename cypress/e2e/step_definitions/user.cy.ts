import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import userPage from '../../page-objects/pages/user.page'
import homePage from '../../page-objects/pages/home.page'


When(/^I open my profile page$/, () => {
	homePage.header.openAccountMenu()
	homePage.header.clickUserProfileButton()
})
When(/^I set "([^"]*)" into username$/, (param) => {
	userPage.setUsername(param)
})

When(/^I set "([^"]*)" to new profile image$/, (param) => {
	userPage.setImgUrl(param)
})

Then(/^Profile image should be updated and name username is equal "([^"]*)"$/, (param) => {
	userPage.isProfileContainUsername(param)
	cy.reload()
	userPage.isProfileImgExisting()
})
