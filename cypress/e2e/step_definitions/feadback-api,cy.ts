import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

let getCaptcha: any, request: any

Given(/^a GET captcha body$/, () => {
	getCaptcha = cy.request('GET', 'rest/captcha/')
		.then((response) => response)
})

When(/^i send POST request with captcha body$/, (table: any) => {
	table.hashes().forEach((row: any) => {
		request = (response: any) => {
			cy.request({
				method: 'POST',
				url: row.url,
				headers: {
					authorization: `Bearer ${window.localStorage.getItem('token')}`,
				},
				body: {
					captchaId: response.captchaId,
					captcha: response.answer,
					comment: row.comment,
					rating: row.rating,
				},
			})
		}
	})
})

Then(/^i get "Feedback" response code (\d+)$/, (status) => {
	getCaptcha.then((response: any) => {
		request(response.body)
	}).then((response: any) => {
		expect(response.status).to.equal(status)
	})
})
