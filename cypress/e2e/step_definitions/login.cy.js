import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('I open login page', () => {
	cy.visit('http://localhost:3000/')
})
When('I enter username and password', () => {
	return null
})
When('I click on sign in login', () => {
	return null
})
Then('I should see homepage', () => {
	return null
})
