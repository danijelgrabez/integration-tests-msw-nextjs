describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('ul > :nth-child(10)').should('exist');
  });

  // NOTE: Cypress can be configured to intercept network request and mock response (on individual spec, or global level)
});
