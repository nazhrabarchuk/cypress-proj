// @ts-ignore
import * as rand from 'randomstring';

class DataHelper {
	getRandomIntInclusive(min: number, max: number): number {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	getRandomAlphabeticStrInRange(min: number, max: number): number {
		const randLength = this.getRandomIntInclusive(min, max)
		return rand.generate({
			charset: 'alphabetic',
			length: randLength,
		})
	}
}
export const dataHelper = new DataHelper();
