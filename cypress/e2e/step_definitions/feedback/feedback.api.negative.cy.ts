import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

let negativeRequest: any

Given(/^i set POST request with wrong captcha$/,
	(table: any) => {
		table.hashes().forEach((row: any) => {
			negativeRequest = cy.request({
				method: 'POST',
				url: row.url,
				headers: {
					authorization: `Bearer ${window.localStorage.getItem('token')}`,
				},
				failOnStatusCode: false,
				body: {
					captchaId: row.captchaId,
					captcha: row.captchaAnswer,
					comment: row.comment,
					rating: row.rating,
				},
			})
		})
	})

Then(/^should exist a response with error message and status$/,
	(table: any) => {
		table.hashes().forEach((row: any) => {
			negativeRequest.then((response: any) => {
				expect(response.body).to.include(row.message)
				expect(response.status).to.equal(+row.status)
			})
		})
	})
