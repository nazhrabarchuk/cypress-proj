import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import userPage from '../../../page-objects/pages/user.page'
import homePage from '../../../page-objects/pages/home.page'


When(/^the user navigates to profile page$/,
	() => {
		homePage.header.openAccountMenu()
		homePage.header.clickUserProfileButton()
	})

When(/^the user set "([^"]*)" into username input$/,
	(name) => {
		userPage.setUsername(name)
	})

When(/^the user uploads a new profile image$/,
	() => {
		userPage.uploadImg()
	})

Then(/^the profile image should be updated and name username is equal "([^"]*)"$/,
	(mame) => {
		userPage.isProfileContainUsername(mame)
		userPage.isProfileImgExisting()
	})
