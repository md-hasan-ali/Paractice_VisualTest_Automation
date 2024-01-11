/// <reference types="cypress" />

describe('Visuals', () => {
    it('should compare screenshot of the entire page', () => {
        cy.visit('www.google.com')
        cy.compareSnapshot({
            name: 'home',
            testThreshold: 0.2
        })
    })
})