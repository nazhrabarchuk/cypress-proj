import { BaseComponent } from './base.component'

const LOCATORS = {
	MODAL_DIALOG_BUTTON: 'button.close-dialog',
	MODAL_COOKIE_BUTTON_LOCATOR: 'a[aria-label="dismiss cookie message"]',
	MODAL_NOTIFICATION_MESSAGE: '.mat-snack-bar-container .mat-simple-snack-bar-content',
	MODAL_SNACKBAR_CLOSE: '.mat-simple-snackbar button',
}

class ModalComponent extends BaseComponent {

	get locators() {
		return LOCATORS
	}

	closeModalWindows(): void {
		if (cy.isVisible(this.locators.MODAL_DIALOG_BUTTON)) {
			cy.clickElement(this.locators.MODAL_DIALOG_BUTTON)
		}
		if (cy.isVisible(this.locators.MODAL_COOKIE_BUTTON_LOCATOR)) {
			cy.clickElement(this.locators.MODAL_COOKIE_BUTTON_LOCATOR)
		}
	}

	closeSnackBar(): void {
		cy.clickElement(this.locators.MODAL_SNACKBAR_CLOSE)
	}

	notificationText(message: any): void {
		cy.shouldContainText(this.locators.MODAL_NOTIFICATION_MESSAGE, message)
	}

	isElementVisible(message: any) {
		return cy.get(this.locators.MODAL_NOTIFICATION_MESSAGE).contains(message)
	}


}

export { ModalComponent }
