/// <reference types="cypress" />

export class EALoginPage {
    performLogin(userName, password){
     //   cy.get('#UserName').type(userName);
        cy.xpath('//input[@id="UserName"]').type(userName);
    //    cy.get('#Password').type(password, { log: false});
        cy.xpath('//input[@id="Password"]').type(password, { log: false});
    }
    clickLoginButton(){
        cy.get('.btn').click();
    }
}

export const loginPage = new EALoginPage();