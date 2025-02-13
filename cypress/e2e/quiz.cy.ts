describe('Tech Quiz e2e tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('should complete all 10 questions"', () => {
    cy.get('.btn').contains('Start Quiz').click()
    for (let i = 0; i < 10; i++) {
      // cy.get('h2').should('be.visible')
      cy.get('.btn').contains('1').click()
    }
    cy.contains('Quiz Completed').should('be.visible')
    cy.contains('Your score:').should('be.visible')
    cy.get('.btn').contains('Take New Quiz').should('be.visible')
  })
})