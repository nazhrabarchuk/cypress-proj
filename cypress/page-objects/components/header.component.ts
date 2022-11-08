import { BaseComponent } from './base.component'

const LOCATORS = {
	LOGO_IMG: 'img.logo',
	BURGER_BUTTON: 'button[aria-label="Open Sidenav"]',
	ACCOUNT_BUTTON: '#navbarAccount',
	LOGIN_BUTTON: '#navbarLoginButton',
	BASKET_BUTTON: 'button[routerlink="/basket"]',
	SEARCH_BUTTON: '#searchQuery',
	SEARCH_INPUT: '#searchQuery input',
}

class HeaderComponent extends BaseComponent {

	get locators() {
		return LOCATORS
	}

	openAccountMenu(): void {
		cy.clickElement(this.locators.ACCOUNT_BUTTON)
	}

	clickLoginButton(): void {
		cy.clickElement((this.locators.LOGIN_BUTTON))
	}

	clickBasketButton(): void {
		cy.clickElement(this.locators.BASKET_BUTTON)
	}

	shouldExistBasketButton(): void {
		cy.isVisible(this.locators.BASKET_BUTTON)
	}
}


export { HeaderComponent }
