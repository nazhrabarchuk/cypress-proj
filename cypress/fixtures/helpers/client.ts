import { REGISTRATION_DATA } from '../dataProvider'

let question: string = ''

const REGISTER_USER_POST_BODY_DATA = {
	email: REGISTRATION_DATA.email,
	password: REGISTRATION_DATA.password,
	passwordRepeat: REGISTRATION_DATA.password,
	securityQuestion: question,
	securityAnswer: 'test',
}

class Client {

	securityQuestionGet(): any {
		return cy.request('GET', `${Cypress.config().baseUrl}api/SecurityQuestions/?id=1`).then(
			(response) => {
				return response.body
			},
		)
	}

	register(): any {
		question = this.securityQuestionGet()
		cy.request('POST', `${Cypress.config().baseUrl}api/Users`, REGISTER_USER_POST_BODY_DATA)
	}
}

export default new Client()

