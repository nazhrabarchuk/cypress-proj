const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

module.exports = defineConfig({
	viewportWidth: 1920,
	viewportHeight: 1080,
	e2e: {
		async setupNodeEvents(on, config) {
			// implement node event listeners here
			const bundler = createBundler({
				plugins: [createEsbuildPlugin(config)],
			})
			on('file:preprocessor', bundler)
			await addCucumberPreprocessorPlugin(on, config)

			return config
		},
		baseUrl: 'http://localhost:3000/',
		specPattern: 'cypress/e2e/features/**/*.feature',
		video: false,
		defaultCommandTimeout: 7000,
		waitForAnimations: true,
		chromeWebSecurity: false,

	},
})
