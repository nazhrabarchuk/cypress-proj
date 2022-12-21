import { BasePage } from './base.page'

const LOCATORS = {
	SOCIAL_FACEBOOK_BUTTON_LOCATOR: 'a[aria-label=\'Button for the Facebook page of the shop\']',
}

class AboutUsPage extends BasePage<AboutUsPage> {
	constructor() {
		super('#/about')
	}

	get locators() {
		return LOCATORS
	}

	clickSocialFacebookButton(): void {
		cy.get(this.locators.SOCIAL_FACEBOOK_BUTTON_LOCATOR).invoke('removeAttr', 'target').click()
	}

}

export default new AboutUsPage()
