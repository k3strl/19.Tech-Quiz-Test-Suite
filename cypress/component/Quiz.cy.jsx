import Quiz from '../../client/src/components/Quiz'

describe('Quiz', () => {
  it('start the quiz when the start button is clicked', () => {
    cy.mount(<Quiz />)
    cy.get('.btn').contains('Start Quiz').click();
  })
})
