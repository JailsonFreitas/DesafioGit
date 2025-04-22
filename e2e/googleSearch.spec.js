import GooglePage from '../Page/BarraPesquisaGoogle';

describe('Google Search', () => {
  const googlePage = new GooglePage();

  it('pesquisar por GitHub', () => {
    googlePage.visit();
    googlePage.searchFor('GitHub');

    cy.url().should('include', 'search?q=GitHub');
    cy.contains('GitHub').should('exist');
  });
});
