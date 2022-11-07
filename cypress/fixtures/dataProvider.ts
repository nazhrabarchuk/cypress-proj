import dataHelper from './data.helper'
let randomEmail = require('random-email');


export const REGISTRATION_DATA = {
	email: randomEmail({ domain: 'test.com' }),
	password: `testtest`,
	securityQuestion: 'Mother\'s maiden name?',
	securityAnswer: 'Mothers name',
}

export const LOGIN_DATA = {
	email: REGISTRATION_DATA.email,
	pass: REGISTRATION_DATA.password,
}

