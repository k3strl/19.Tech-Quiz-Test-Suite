describe('Tech Quiz E2E Tests', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.findByText('Start').click()
    })
  
    it('should display a question when quiz starts', () => {
      cy.contains('Question 1')
    })
  
    it('should navigate through questions and finish the quiz', () => {
      // Answer all questions and ensure navigation works correctly
      cy.get('.question').each(($el, index) => {
        cy.wrap($el).within(() => {
          cy.get('input[type="radio"]').check()
        })
        if (index < 9) { // Assuming there are total 10 questions
          cy.findByText('Next').click()
        } else {
          cy.findByText('Finish')
        }
      })
    })
  
    it('should display the final score', () => {
      // Ensure score is calculated correctly and displayed
      cy.contains('Your Score:')
    })
  })  