import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import customerFeedbackPage from '../../page-objects/pages/customerFeedback.page'

When(/^the user navigates to Customer Feedback page$/,
	() => {
		homePage.header.clickBurgerButton()
		homePage.sideBar.clickCustomerFeedbackLink()
	})

When(/^the user fill and submit Feedback form with title "([^"]*)"$/,
	(title) => {
		customerFeedbackPage.fillFeedbackForm(title)
	})

Then(/^the message "([^"]*)" should be displayed on the screen$/,
	(msg) => {
		customerFeedbackPage.modal.notificationText(msg)
	})
