import { REGISTRATION_DATA } from '../dataProvider'

let question: string = ''

const LOGIN_USER_POST_BODY_DATA = {
	email: REGISTRATION_DATA.email,
	password: REGISTRATION_DATA.password,
}

const REGISTER_USER_POST_BODY_DATA = {
	email: REGISTRATION_DATA.email,
	password: REGISTRATION_DATA.password,
	passwordRepeat: REGISTRATION_DATA.password,
	securityQuestion: question,
	securityAnswer: 'test',
}

class Client {
	/**
	 * GET security question by request
	 */
	securityQuestionGet(): any {
		return cy.request('GET', `${Cypress.config().baseUrl}api/SecurityQuestions/?id=1`).then(
			(response) => {
				return response.body
			},
		)
	}

	logIn(): any {
		cy.request({
			method: 'POST',
			url: `${Cypress.config().baseUrl}rest/user/login/`,
			body: LOGIN_USER_POST_BODY_DATA,
		}).then((resp) => {
			window.localStorage.setItem('token', resp.body.authentication.token)
			window.sessionStorage.setItem('bid', resp.body.authentication.bid)
			cy.setCookie('token', resp.body.authentication.token)
		})

	}

	/**
	 * Register user on the site
	 */
	register(): any {
		question = this.securityQuestionGet()
		cy.request('POST', `${Cypress.config().baseUrl}api/Users`, REGISTER_USER_POST_BODY_DATA)
	}
}

export default new Client()

