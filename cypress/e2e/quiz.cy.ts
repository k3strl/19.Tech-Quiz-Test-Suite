describe('Tech Quiz e2e tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000')
  })
  
  it("should show a button with Start Quiz on page load", () => {
    cy.get("button").contains("Start Quiz").should("be.visible");
  });
  
  // it('should start quiz when button is clicked', () => {
  //   cy.get('button').contains('Start Quiz').click();
  //   cy.get(".card").should("be.visible").and('contain', "1");
  //   cy.get(".card").should("be.visible").and('contain', "2");
  //   cy.get(".card").should("be.visible").and('contain', "3");
  //   cy.get(".card").should("be.visible").and('contain', "4");
  // });
    
  it('should answer all 10 questions', () => {
    cy.get('button').contains('Start Quiz').click();
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click();
    }
    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score:').should('be.visible');
    cy.get('button').contains('Take New Quiz').should('be.visible');
  });
})