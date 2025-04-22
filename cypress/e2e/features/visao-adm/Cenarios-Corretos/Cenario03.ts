import { faker } from '@faker-js/faker';

describe('Formulário de Inscrição - Dados Inválidos', () => {
    it('Deve preencher o formulário com dados Inválidos', () => {
        const nome = faker.name.firstName();
        const sobrenome = faker.name.lastName();
        const email = faker.internet.email();
        const telefone = faker.string.numeric(10);
        const numeroAleatorio = Math.floor(Math.random() * 224).toString();
        const cidade = faker.address.city();
        const codigo = faker.string.numeric(4);
        
        cy.visit('https://www.toolsqa.com/selenium-training/#enroll-form');
        
        cy.get('#first-name').clear().type(nome).should('have.value', nome);
        cy.get('#last-name').clear().type(sobrenome).should('have.value', sobrenome);
        cy.get('#email').clear().type(email).should('have.value', email);
        cy.get('#mobile').clear().type(telefone).should('have.value', telefone);
        cy.get('#country').select(numeroAleatorio).should('have.value', numeroAleatorio); 
        cy.get('#city').clear().type(cidade).should('have.value', cidade);
        cy.get('#message').clear().type(cidade).should('have.value', cidade);
        cy.get('#code').clear().type(codigo).should('have.value', codigo);
        cy.get('.btn-primary').click();
        cy.get('.alert').should('be.visible').and('contain', 'Sorry ! Unable to verify that you are human.');
    });
});
