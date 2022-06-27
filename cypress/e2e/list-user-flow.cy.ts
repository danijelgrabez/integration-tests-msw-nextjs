describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('ul > :nth-child(10)').should('exist');
    cy.get('ul > :nth-child(1)').should('contain', 'First item (skip param: 0');
  });

  // NOTE: Cypress can be configured to intercept network request and mock response (on individual spec, or global level)
});
