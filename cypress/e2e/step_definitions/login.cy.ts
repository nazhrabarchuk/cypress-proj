import { Then, When } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import loginPage from '../../page-objects/pages/login.page'
import { LOGIN_DATA } from '../../fixtures/dataProvider'


When(/^the user navigates to login page$/,
	() => {
		homePage.navigateToLogin()
	})

When(/^the user fill login form with incorrect cred$/,
	(table: any) => {
		table.hashes().forEach((row: any) => {
			loginPage.login(row.email, row.password)
		})
		loginPage.submitLogIn()
	})

When(/^the user fill login form with valid credentials$/,
	() => {
		loginPage.login(LOGIN_DATA.email, LOGIN_DATA.pass)
		loginPage.submitLogIn()
	})

Then(/^the error login message "([^"]*)" is shown$/,
	(param) => {
		loginPage.errorLoginMsg(param)
	})

Then(/^the basket button is displayed on the homepage$/,
	() => {
		homePage.pageShouldExist()
		homePage.header.shouldExistBasketButton()
	})
