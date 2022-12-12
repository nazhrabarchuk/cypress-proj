import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given(/^a feedback request body$/, () => {
	cy.request('GET', 'rest/captcha/').then((response) => {
		const requestBody = {
			captchaId: response.body.captchaId,
			captcha: response.body.answer,
			comment: 'API test!1',
			rating: 3,
		}
		cy.request({
			method: 'POST',
			url: 'api/Feedbacks',
			headers: {
				authorization: `Bearer ${window.localStorage.getItem('token')}`,
			},
			body: requestBody,
		}).then(response => {
			expect(response.status).to.equal(201)
		})

	})
})
