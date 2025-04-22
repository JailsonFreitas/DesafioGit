import GoogleImagesPage from '../Page/GoogleImage';

describe('Google Images Search', () => {
  const googleImagesPage = new GoogleImagesPage();

  it('Deve pesquisar a logo do GitHub', () => {
    googleImagesPage.visit();
    googleImagesPage.searchForImage('logo do GitHub');

    cy.url().should('include', 'search?q=logo+do+GitHub');
    cy.get('img').should('have.length.greaterThan', 0);  // Verifica se há imagens retornadas
  });
});
