import { After, Before, Given } from '@badeball/cypress-cucumber-preprocessor'
import homePage from '../../page-objects/pages/home.page'
import client from '../../fixtures/helpers/client'

/**
 * Precondition step: Api Registration
 */
Before({ tags: '@api-registration' }, () => {
	client.register()
})

/**
 * Precondition step: API Registration & Login into Application
 */
Before({ tags: '@api-register-login' }, () => {
	client.register()
	client.logIn()
})

Before({ tags: '@api-login' }, () => {
	client.logIn()
})
/**
 * Open Home Page
 */
Given(/^I am on Home Page$/, () => {
	homePage.open()
})

