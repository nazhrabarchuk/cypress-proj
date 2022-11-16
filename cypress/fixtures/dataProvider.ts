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

export const ADDRESS_DATA = {
	country: 'Country',
	name: 'Name',
	mobileNumber: '1234567',
	zip: 'zip',
	address: 'Address',
	city: 'City',
	state: 'State'
};

export const CARD_DATA = {
	name: 'Name 1',
	cardNumber: '1234567891234567',
	month: '1',
	year: '2080'
};
