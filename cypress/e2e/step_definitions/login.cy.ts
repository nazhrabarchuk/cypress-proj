import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'

Given(/^I am on Home Page$/, () => {
	homePage.open()
})
When(/^I Navigate to Login Page$/, () => {
	homePage.navigateToLogin()
})
When(/^I enter "([^"]*)" and "([^"]*)"$/, (username, password) => {

})
When(/^I click on sign in login$/, () => {

})
Then(/^I should see homepage$/, () => {

})
