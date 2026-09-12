describe('Demo  Web App Test', () => {
  
  it('Start page successfully loads', () => {
    cy.visit('/');
  });

  it('Start page shows right content', () => {
    const rightContent = 'WordPress';
    cy.visit('/');
    cy.get('title').should('contain', rightContent);
  });
});
