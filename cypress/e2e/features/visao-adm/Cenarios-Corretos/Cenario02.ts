const searchTerm = Cypress.env('SEARCH_TERM') || 'defaultSearchTerm';

describe('Realizar uma pesquisa', () => {
  it('Deve permitir que seja realizada uma pesquisa no filtro', () => {
    cy.visit('https://www.toolsqa.com/selenium-training/#enroll-form');

    cy.get('.navbar__search .navbar__search--input')
      .type(`${searchTerm}{enter}`); 
  });
});
