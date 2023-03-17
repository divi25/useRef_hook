describe('Counter App', () => {
    it('increments the count value on button click', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('button').click();
  
      cy.get('p').should('have.text', 'Count: 0');
    });
  });
  