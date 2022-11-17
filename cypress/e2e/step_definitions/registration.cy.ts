import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../../page-objects/pages/login.page'
import registrationPage from '../../page-objects/pages/registration.page'
import { NOTIFICATION_MESSAGES } from '../../fixtures/messages'
import { REGISTRATION_DATA } from '../../fixtures/dataProvider'

When(/^I click 'Not yet a customer' button$/, () => {
	loginPage.clickRegistrationButton()
})

When(/^I fill the registration form with valid creds$/, () => {
	registrationPage.fillRegistrationForm(
		REGISTRATION_DATA.email,
		REGISTRATION_DATA.password,
		REGISTRATION_DATA.password,
		REGISTRATION_DATA.securityQuestion,
		REGISTRATION_DATA.securityAnswer,
	)
})
When(/^I click submit button$/, () => {
	registrationPage.clickSubmitRegisterButton()
})

Then(/^I should see successful registration message on Login page$/, () => {
	loginPage.pageShouldExist()
	loginPage.modal.notificationText(NOTIFICATION_MESSAGES.SUCCESSFUL_REGISTRATION)
})
When(/^I enter "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/,
	(param1, param2, param3, param4, param5) => {
		registrationPage.fillRegistrationForm(param1, param2, param3, param4, param5)
	})
Then(/^I should see the "([^"]*)" on screen$/, (param1) => {
	registrationPage.errorRegistrationMsg(param1)
})
