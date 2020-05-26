/// <reference types="cypress" />

describe("test EA Application", () => {

    before("Login to application", () => {
        // visiting website
        cy.visit("/");
        cy.fixture("eauser").as("user");

        cy.get("@user").then((user) =>{
            cy.login(user.UserName, user.Password);
           })
    })

    it("Performing Benefit check", () => {
        // cy.get("#loginLink").invoke('text').as("linkText");

        // cy.contains("Login").click();

        // cy.get("@linkText").then(($x) => {
        //     expect($x).is.eql('Login');
        // })
        // cy.get("@user").then((user) =>{
        //     cy.get('#UserName').type(user.UserName);
        //     cy.get("#Password").type(user.Password);      
        // })
        // cy.get("@user").then((user) =>{
        //  cy.login(user.UserName, user.Password);
        // })
      
     //   cy.get(".btn").click({force: true});

        // Click Employee List
        cy.contains("Employee List").click();

        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();

        cy.get('.table').find('tr').as("rows");

        cy.get("@rows").then(($row) => {
        
        cy.wrap($row).click({multiple:true})
         })
    
        // Verify the value from a property
         cy.wrap({name:'Katrik'}).should('have.property','name').and('eq','Katrik')

    })
})

