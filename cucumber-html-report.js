// cucumber-html-report.js
const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/cucumber-json',        // Cucumber JSON sonuçlarının dizini
    reportPath: './reports/cucumber-html',    // HTML raporunun kaydedileceği yer
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest',
        },
        platform: {
            name: 'windows',
            version: '10',
        },
    },
    customData: {
        title: 'Amazon Test Raporu',
        data: [
            { label: 'Proje', value: 'Cypress + Cucumber' },
            { label: 'Çalışma Tarihi', value: new Date().toLocaleString() }
        ]
    }
});