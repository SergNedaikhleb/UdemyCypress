/// <reference types="cypress" />

describe("Testing of EA App", ()=>{
    
    var linkText;
    it("Login application", () => {
        // Visiting website
        cy.visit("http://eaapp.somee.com/")
    //    cy.get("#loginLink").then(($link) => {  long way to work with promise
      //      return $link.text();
          //  expect(linkText).is.eql('Login');
            // expect(LinkText).is.eql('Login');
      //  }).click();
     //   expect(linkText).is.eql('Login');
    //    }).as("linkText")

    // shorthand way of working with promise using invoke
        cy.get("#loginLink").invoke('text').as("linkText")

        cy.get("@linkText").then(($x) =>{  // this is the Alias
            expect($x).is.eql('Login');
        })
        cy.contains("Login").click();

        cy.url().should("include", "/Account/Login");

        cy.get('#UserName').type("admin")
        cy.get("#Password").type("password");

        cy.get(".btn").click({force: true});

        // Click Employee List
        cy.contains("Employee List").click();
        // Table
        // cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click()

        // cy.get('.table').find('tr').as("rows");

        // cy.get("@rows").then(($row) => {
        //         cy.wrap($row).click({multiple:true})
        // })

        // Verify the value from a property
        cy.wrap({name:'Katrik'}).should('have.property','name').and('eq','Katrik')

        // Using Wrap
        cy.get('.table').find('tr > td').then(($td) => {
            cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefirs").click();
        })

    })
})