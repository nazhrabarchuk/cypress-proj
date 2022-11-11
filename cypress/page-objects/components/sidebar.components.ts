import { BaseComponent } from './base.component'

const LOCATORS = {
	CUSTOMER_FEEDBACK_LINK: 'a[href="#/contact"]',
	ABOUT_US_LINK: 'a[href="#/about"]',
}

class SidebarComponents extends BaseComponent {
	get locators() {
		return LOCATORS
	}

	clickCustomerFeedbackLink(): void {
		cy.clickElement(this.locators.CUSTOMER_FEEDBACK_LINK)
	}
}

export { SidebarComponents }
