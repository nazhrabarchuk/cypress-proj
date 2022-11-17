const report = require('multiple-cucumber-html-reporter')
const fs = require('fs')

report.generate({
	jsonDir: 'json-logs/',
	reportPath: './cucumber-report/',
	metadata: {
		browser: {
			name: 'chrome',
		},
		device: 'Local Test Machine',
		platform: {
			name: 'windows',
			version: '10',
		},
	},
})
