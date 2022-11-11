import { HeaderComponent } from '../components/header.component'
import { ModalComponent } from '../components/modal.component'
import { ProductsComponent } from '../components/products.component'
import { SidebarComponents } from '../components/sidebar.components'

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

	get products() {
		return new ProductsComponent()
	}

	get sideBar() {
		return new SidebarComponents()
	}

	setElementValue(locator: string, value: any) {
		cy.setElementValue(locator, value)
	}

	clickElement(locator: string): void {
		cy.clickElement(locator)
	}

	calculate(fn: any): number {
		return new Function(`return ${fn}`)()
	}
}

export { BasePage }
