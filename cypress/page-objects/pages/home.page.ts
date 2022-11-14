import { BasePage } from './base.page'

const LOCATORS = {
	PAGINATOR_NEXT_PAGE_BTN: 'button.mat-paginator-navigation-next',
}

class HomePage extends BasePage<HomePage> {
	constructor() {
		super('#')
	}

	get locators() {
		return LOCATORS
	}

	open(): HomePage {
		this.goto()
		this.modal.closeModalWindows()
		return this
	}

	navigateToLogin(): void {
		this.header.openAccountMenu()
		this.header.clickLoginButton()
	}

	openLastProductsPage(locator = this.locators.PAGINATOR_NEXT_PAGE_BTN): void {
		cy.clickElement(locator).then(($btn) => {
			$btn.ariaDisabled ? cy.log(`Element: ${locator} is disabled`) : cy.wrap($btn).click()

		})
	}
}

export default new HomePage()
