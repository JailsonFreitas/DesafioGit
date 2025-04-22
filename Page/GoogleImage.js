class GoogleImagesPage {
    visit() {
      cy.visit('https://images.google.com');
    }
  
    searchForImage(query) {
      cy.get('input[name="q"]').type(query);
      cy.get('input[name="q"]').type('{enter}');
    }
  }
  
  export default GoogleImagesPage;
  