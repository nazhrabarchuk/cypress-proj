import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given(/^I am on Home Page$/, () => {
	cy.visit('http://localhost:3000/')
})
When(/^I Navigate to Login Page$/, () => {

})
When(/^I enter "([^"]*)" and "([^"]*)"$/, (username, password) => {

})
When(/^I click on sign in login$/, () => {

})
Then(/^I should see homepage$/, () => {

})
