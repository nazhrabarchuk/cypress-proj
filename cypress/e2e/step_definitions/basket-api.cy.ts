import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

let getItemBasket: any, request: any
Given(/^a GET basket body$/, () => {
	getItemBasket = cy.request({
		method: 'GET',
		url: 'rest/basket/29',
		headers: {
			authorization: `Bearer ${window.localStorage.getItem('token')}`,
		},
	})
})
When(/^i send POST request with basket body$/, () => {
	request = (response: any) => {
		cy.request({
			method: 'POST',
			url: 'api/BasketItems/',
			headers: {
				authorization: `Bearer ${window.localStorage.getItem('token')}`,
			},
			body: {
				ProductId: 1,
				BasketId: response.id,
				quantity: 1,
			},
		})
	}
})
Then(/^i get "Basket" response code (\d+)$/, () => {
	getItemBasket.then((response: any) => {
		request(response.body)
	}).then((response: any) => {
		expect(response).which.is.an('object').to.have.property('status')
		expect(response.status).to.equal(200)
	})
})
