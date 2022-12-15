import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

let deleteRequest: any

Given(/^a DELETE method for undefined item with id (\d+) from the basket$/, (id) => {
	deleteRequest = cy.request({
		method: 'DELETE',
		url: `api/BasketItems/${id}`,
		headers: {
			authorization: `Bearer ${window.localStorage.getItem('token')}`,
		},
		failOnStatusCode: false,
	})
})

Then(/^a response should contain a message ([^"]*) with status (\d+)$/, (message, status) => {
	deleteRequest.then((response: any) => {
		expect(response.body.message).to.equal(message)
		expect(response.status).to.equal(status)
	})
})
