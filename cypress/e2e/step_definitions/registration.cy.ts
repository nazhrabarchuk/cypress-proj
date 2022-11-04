import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../../page-objects/pages/login.page'
import registrationPage from '../../page-objects/pages/registration.page'
import { NOTIFICATION_MESSAGES } from '../../fixtures/messages'

When(/^I click 'Not yet a customer' button$/, function() {
	loginPage.clickRegistrationButton()
})

When(/^I fill the registration form with valid creds$/, () => {
	registrationPage.fillRegistrationForm()
})
When(/^I click on submit button$/, () => {
	registrationPage.clickSubmitRegisterButton()
})

Then(/^I should see successful registration message on Login page$/, function() {
	loginPage.pageShouldExist()
	loginPage.modal.notificationText(NOTIFICATION_MESSAGES.SUCCESSFUL_REGISTRATION)
})
