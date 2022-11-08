import { Before, Given } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import client from '../../fixtures/helpers/client'

/**
 * Precondition step: Api Registration
 */
Before({ tags: '@pre-step-registration' }, () => {
	cy.registerAPI()
})

/**
 * Precondition step: API Registration & Login into Application
 */
Before({ tags: '@register-and-login-into-app' }, () => {
	cy.loginAPI()
})

Before({ tags: '@login-into-app' }, () => {
	client.logIn()
})
/**
 * Open Home Page
 */
Given(/^I am on Home Page$/, () => {
	homePage.open()
})
