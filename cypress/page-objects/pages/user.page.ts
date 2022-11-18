import { BasePage } from './base.page'

const LOCATORS = {
	PROFILE_USERNAME_INPUT: '#username',
	PROFILE_USERNAME_SUBMIT: '#submit',
	PROFILE_NAME_TEXT: '.img-rounded ~ p',
	PROFILE_IMG: 'img.img-rounded',
	PROFILE_IMAGE_URL_INPUT: 'input[name="imageUrl"]',
	PROFILE_IMAGE_URL_SUBMIT: '#submitUrl',
	UPLOAD_IMG_FILE: '#picture',
	UPLOAD_IMG_SUBMIT_BUTTON: 'button[aria-label="Button to upload the profile picture"]',
}

class UserPage extends BasePage<UserPage> {
	constructor() {
		super('#/profile')
	}

	get locators() {
		return LOCATORS
	}

	setUsername(username: any): void {
		cy.setElementValue(this.locators.PROFILE_USERNAME_INPUT, username)
		cy.clickElement(this.locators.PROFILE_USERNAME_SUBMIT)
	}

	setImgUrl(url: any): void {
		cy.setElementValue(this.locators.PROFILE_IMAGE_URL_INPUT, url)
		cy.clickElement(this.locators.PROFILE_IMAGE_URL_SUBMIT)
	}

	isProfileContainUsername(username: any): void {
		cy.shouldContainText(this.locators.PROFILE_NAME_TEXT, username)
	}

	isProfileImgExisting(): void {
		cy.get(this.locators.PROFILE_IMG)
			.invoke('attr', 'src')
			.should('not.contain', 'default.svg')
	}

	uploadImg(): void {
		cy.get(this.locators.UPLOAD_IMG_FILE).selectFile('cypress/fixtures/user.png')
		cy.clickElement(this.locators.UPLOAD_IMG_SUBMIT_BUTTON)
	}
}

export default new UserPage()
