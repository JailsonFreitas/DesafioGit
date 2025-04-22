class GooglePage {
    visit() {
      cy.visit('https://www.google.com');
    }
  
    searchFor(query) {
      cy.get('input[name="q"]').type(query);
      cy.get('input[name="q"]').type('{enter}');
    }
  }
  
  export default GooglePage;
  