import { HeaderComponent } from '../components/header.component'
import { ModalComponent } from '../components/modal.component'

abstract class BasePage<T> {
	private readonly pageUrl: string

	protected constructor(url: string) {
		this.pageUrl = url
	}

	get url(): string {
		return this.pageUrl
	}

	pageShouldExist() {
		cy.url().should('include', this.url)
	}

	goto(): BasePage<T> {
		if (this.pageUrl === '') {
			throw new Error(`Page url wasn't provided`)
		}
		cy.visit(this.pageUrl)
		return this
	}

	get header() {
		return new HeaderComponent()
	}

	get modal() {
		return new ModalComponent()
	}

	setElementValue(locator: string, value: any) {
		cy.get(locator).type(value)
	}

	clickElement(locator: string): void {
		cy.clickElement(locator)
	}
}

export { BasePage }
