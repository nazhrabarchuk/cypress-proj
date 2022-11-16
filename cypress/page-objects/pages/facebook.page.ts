import { BasePage } from './base.page'

const LOCATORS = {
	PROFILE_TEXT_LOCATOR: 'h1',
	RELOAD_BUTTON: 'Reload Page',
}

class FacebookPage extends BasePage<FacebookPage> {
	constructor() {
		super('#')
	}

	get locators() {
		return LOCATORS
	}

	clickReloadPage(): void {
		cy.clickElementByText(this.locators.RELOAD_BUTTON)
	}

	profileTitleShouldExistWithText(text: any): void {
		cy.isVisible(this.locators.PROFILE_TEXT_LOCATOR)
		cy.shouldContainText(this.locators.PROFILE_TEXT_LOCATOR, text)
	}

}

export default new FacebookPage()
