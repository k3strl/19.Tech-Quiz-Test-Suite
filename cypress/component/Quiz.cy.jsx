import Quiz from '../../client/src/components/Quiz'

describe('Quiz', () => {

  it('mounts and displays the "start quiz" button', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should("be.visible");
  });

  it('start the quiz when the start button is clicked', () => {
    cy.mount(<Quiz />)
    cy.get('.btn').contains('Start Quiz').click();
  })
})
