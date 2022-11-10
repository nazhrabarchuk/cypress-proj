import { BaseComponent } from './base.component'

const LOCATORS = {
	MODAL_DIALOG_BUTTON: 'button.close-dialog',
	MODAL_COOKIE_BUTTON_LOCATOR: 'a[aria-label="dismiss cookie message"]',
	MODAL_NOTIFICATION_MESSAGE: '.mat-snack-bar-container .mat-simple-snack-bar-content',

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

	notificationText(message: string) {
		cy.shouldContainText(this.locators.MODAL_NOTIFICATION_MESSAGE, message)
	}
}

export { ModalComponent }
