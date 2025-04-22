/// <reference types="cypress" />
import { DadosLoginAtalaya } from "./interfaces/dados-login-atalaya";


declare global {
    namespace Cypress {
        interface Chainable {
            login(dadosLoginAtalaya: DadosLoginAtalaya): Chainable<void>;
            selecionarAutocomplete(id: string, valor: string, urlAutocomplete?: string, clear?: boolean): Chainable<void>;
            removerElementoChip(texto: string, elemento: string)

        }
    }
}


Cypress.Commands.add('login', (dadosLoginAtalaya, { cacheSession = true } = {}) => { 
    const login = () => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()

        cy.intercept({
            method: 'POST',
            url: 'http://atalaya-backend:9010/api/auth'
        }).as('PostAcessoSistema')
        
        cy.visit(Cypress.config().baseUrl)
        cy.get('[id=":r0:"]')
            .should('be.visible')
            .should('be.empty')
        cy.get('[id=":r0:"]')
            .type(dadosLoginAtalaya.cpf)
        cy.get('[id=":r1:"]')
            .type(dadosLoginAtalaya.senha, {log: false})
        cy.contains('Entrar ')
            .click()
            cy.get('input[type="checkbox"]',{timeout:100000}).check()
            .wait(1000)
            .click()
            cy.contains('Salvar')
            .click()

        cy.wait('@PostAcessoSistema')
    }

    const options = {
        cacheAcrossSpecs: true,
    }

    if (cacheSession) {
        cy.session(dadosLoginAtalaya.cpf, login, options)
    } else {
        login()
    }
})

Cypress.Commands.add('selecionarAutocomplete', (seletor, valor, urlAutocomplete, clear) => {

    if (urlAutocomplete != null || urlAutocomplete != '') {
        cy.intercept({
            method: 'GET',
            url: `${urlAutocomplete}`
        }).as('getAutocomplete')
    }

    if (clear) {
        cy.get(seletor)
            .clear()
            .find('button')
            .scrollIntoView()
            .click()
    } else {
        cy.get(seletor)
            .find('button')
            .scrollIntoView()
            .click()
    }

    if (urlAutocomplete) {
        cy.wait('@getAutocomplete')
    }

    cy.get('span').contains(valor)
        .click()

})

Cypress.Commands.add('removerElementoChip', (texto, elementoEm) => {
    cy.get(elementoEm)
        .parent()
        .each((ele) => {
            cy.wrap(ele).then((wrappedEle) => {
                if (wrappedEle.text().trim() === texto) {
                    cy.wrap(wrappedEle).find(elementoEm).click();
                }
            });
        });
})