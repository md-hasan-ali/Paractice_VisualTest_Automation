/// <reference types="cypress" />

describe('Visuals', () => {
    it('Google home page compaire', () => {
        cy.visit('https://www.google.com/')
        cy.compareSnapshot({
            name: 'google-home',
            testThreshold: 0.5
        })
    })
    it('Facebook loging page compaire', () => {
        cy.visit('https://www.facebook.com/')
        cy.compareSnapshot({
            name: 'fb-home',
            testThreshold: 0.5
        })
    })
    it('Demoblaze Home page compaire', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.compareSnapshot({
            name: 'demo-home',
            testThreshold: 0.5
        })
    })
})