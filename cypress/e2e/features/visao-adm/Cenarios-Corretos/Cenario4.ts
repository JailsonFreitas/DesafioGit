describe('Acessar botão tutorial', () => {
    it('Deve permitir que seja acessado o botão e entre em um curso', () => {
      cy.visit('https://www.toolsqa.com/selenium-training/#enroll-form');
      cy.get('.navbar__links > :nth-child(4) > a').should('be.visible').click();
  
      cy.get('.about-us > :nth-child(1)').should('be.visible');
      cy.get('.about-us > :nth-child(2)').should('be.visible');
      cy.get('.about-us > :nth-child(3)').should('be.visible');
    });
  });
  