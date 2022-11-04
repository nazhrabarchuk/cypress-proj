import { BasePage } from './base.page'

class HomePage extends BasePage<HomePage> {
	constructor() {
		super('#')
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
}

export default new HomePage()
