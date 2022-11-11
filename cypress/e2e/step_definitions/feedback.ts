import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import customerFeedbackPage from '../../page-objects/pages/customerFeedback.page'

When(/^I navigate to Customer Feedback page$/, () => {
	homePage.header.clickBurgerButton()
	homePage.sideBar.clickCustomerFeedbackLink()
})
When(/^I fill Feedback form with "([^"]*)"$/, (param) => {
	customerFeedbackPage.fillFeedbackForm(param)
})

When(/^I click submit Feedback form$/, () => {
	customerFeedbackPage.submitFeedbackForm()
})
Then(/^I should see a successfully message "([^"]*)"$/, (param) => {
	customerFeedbackPage.modal.notificationText(param)
})
