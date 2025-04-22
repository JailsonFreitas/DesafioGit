import { faker } from '@faker-js/faker';

describe('Formulário de Inscrição - Dados válidos', () => {
    it('Deve preencher o formulário com dados válidos', () => {
        const nome = faker.name.firstName();
        const sobrenome = faker.name.lastName();
        const email = faker.internet.email();
        const telefone = faker.string.numeric(10);
        const numeroAleatorio = Math.floor(Math.random() * 224).toString(); // Convertendo para string
        const cidade = faker.address.city();
        
        cy.visit('https://www.toolsqa.com/selenium-training/#enroll-form');
        
        cy.get('#first-name').clear().type(nome).should('have.value', nome);
        cy.get('#last-name').clear().type(sobrenome).should('have.value', sobrenome);
        cy.get('#email').clear().type(email).should('have.value', email);
        cy.get('#mobile').clear().type(telefone).should('have.value', telefone);
        cy.get('#country').select(numeroAleatorio).should('have.value', numeroAleatorio); // Usando a string gerada
        cy.get('#city').clear().type(cidade).should('have.value', cidade);
        cy.get('#message').clear().type(cidade).should('have.value', cidade);
    });
});
