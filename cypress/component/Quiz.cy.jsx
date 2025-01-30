describe('Quiz Component', () => {
    it('should display a question when quiz starts', () => {
      cy.visit('/')
      cy.contains('Question 1')
    })
    // Add more tests to cover other functionalities of the Quiz component
    
  })
  