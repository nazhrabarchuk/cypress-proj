import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { LOGIN_USER_POST_BODY_DATA, REGISTER_USER_POST_BODY_DATA } from '../../../fixtures/helpers/client'

let requestBody: any,
	responseBody: any

Given(/^a registration request body$/, () => {
	requestBody = REGISTER_USER_POST_BODY_DATA
})

Given(/^a login request body$/, () => {
	requestBody = LOGIN_USER_POST_BODY_DATA
})

When(/^i send POST request to (.*)$/, (path: any) => {
	responseBody = cy.request({
		url: path,
		method: 'POST',
		body: requestBody,
	})
})

Then(/^i get response code (\d+)$/, (status) => {
	responseBody.then((response: any) => {
		expect(response.status).to.equal(status)
		expect(response).to.have.property('headers')
		expect(response).to.have.property('duration')
	})
})
