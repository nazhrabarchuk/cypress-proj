import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

let getItemBasket: any, request: any

Given(/^i set GET request for basket body$/,
	() => {
		getItemBasket = cy.request({
			method: 'GET',
			url: 'rest/basket/29',
			headers: {
				authorization: `Bearer ${window.localStorage.getItem('token')}`,
			},
		})
	})

When(/^i set POST request with basket body$/,
	(table: any) => {
		table.hashes().forEach((row: any) => {
			request = (response: any) => {
				cy.request({
					method: 'POST',
					url: row.url,
					headers: {
						authorization: `Bearer ${window.localStorage.getItem('token')}`,
					},
					body: {
						ProductId: row.productId,
						BasketId: response.id,
						quantity: row.quantity,
					},
				})
			}
		})
	})

Then(/^i receive valid "Basket" Response with status code (\d+)$/,
	(status) => {
		getItemBasket.then((response: any) => {
			request(response.body)
		}).then((response: any) => {
			expect(response).which.is.an('object').to.have.property('status')
			expect(response.status).to.equal(status)
		})
	})

