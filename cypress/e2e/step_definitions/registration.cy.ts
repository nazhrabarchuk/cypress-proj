import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../../page-objects/pages/login.page'
import registrationPage from '../../page-objects/pages/registration.page'
import { REGISTRATION_DATA } from '../../fixtures/dataProvider'

When(/^the user want to create an account$/, () => {
	loginPage.clickRegistrationButton()
})

When(/^the user fill the registration form with valid credentials$/, () => {
	registrationPage.fillRegistrationForm(
		REGISTRATION_DATA.email,
		REGISTRATION_DATA.password,
		REGISTRATION_DATA.password,
		REGISTRATION_DATA.securityQuestion,
		REGISTRATION_DATA.securityAnswer,
	)
	registrationPage.clickSubmitRegisterButton()
})

When(/^the user type "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" into the registration form$/,
	(email, password, password2, securityQuestion, securityAnswer) => {
		registrationPage.fillRegistrationForm(email, password, password2, securityQuestion, securityAnswer)
	})

Then(/^the message "([^"]*)" is shown on the login page$/, (msg) => {
	loginPage.pageShouldExist()
	loginPage.modal.notificationText(msg)
})

Then(/^the message "([^"]*)" is displayed on the screen$/, (msg) => {
	registrationPage.errorRegistrationMsg(msg)
})
