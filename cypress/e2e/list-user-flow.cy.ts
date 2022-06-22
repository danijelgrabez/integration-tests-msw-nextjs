describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('ul > :nth-child(10)').should('exist');
  });
});
