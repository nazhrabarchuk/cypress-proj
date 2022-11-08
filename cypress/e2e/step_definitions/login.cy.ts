import { Before, Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import loginPage from '../../page-objects/pages/login.page'
import { LOGIN_DATA } from '../../fixtures/dataProvider'

When(/^I Navigate to Login Page$/, () => {
	homePage.navigateToLogin()
})
When(/^I fill login form with valid credentials$/, () => {
	loginPage.login(LOGIN_DATA.email, LOGIN_DATA.pass)
})
When(/^I click on sign in login$/, () => {
	loginPage.submitLogIn()
})

When(/^I fill login form with "([^"]*)" and "([^"]*)"$/, (param1, param2) => {
	loginPage.login(param1, param2)
})

Then(/^I should see basket button on the homepage$/, () => {
	homePage.pageShouldExist()
	homePage.header.shouldExistBasketButton()
})

Then(/^I should see error login message$/, function() {
	loginPage.errorLoginMsg()
})
