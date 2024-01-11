/// <reference types="cypress" />

describe('Visuals', () => {
    it('should compare screenshot of the entire page', () => {
        cy.visit('https://www.google.com/chrome/')
        cy.compareSnapshot({
            name: 'home',
            testThreshold: 0.9
        })
    })
})