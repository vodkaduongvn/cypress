describe('Counter', () => {
    it('current counter increase 1 after one click', () => {

        cy.visit('http://localhost:5000')
        cy.get('[data-cy=nav-counter]').click();
        cy.location('pathname').should('equal', '/counter')

        cy.screenshot('counter/screenshot1')

        cy.contains('button.btn-primary', 'Increment').click()

        cy.contains('[data-cy=currentCount]', '1').should('be.visible')
    })
})