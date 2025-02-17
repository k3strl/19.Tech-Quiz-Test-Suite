describe('Tech Quiz e2e tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000')
  })
  
  it("should show a button with Start Quiz on page load", () => {
    cy.get("button").contains("Start Quiz").should("be.visible");
  });
    
  it('should choose the first answer for all 10 questions', () => {
    cy.get('button').contains('Start Quiz').click();
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click();
    }
    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score:').should('be.visible');
    cy.get('button').contains('Take New Quiz').should('be.visible');
  });
  // cy.get(".alert-success").should("be.visible").and('contain', 'Your score');
})