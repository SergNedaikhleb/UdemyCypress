/// <reference types="cypress" />

describe("Testing with assertions", () => {
    // do before all method
    beforeEach("Call for a particular it block", () => {
        cy.visit("http://www.executeautomation.com/site");
    })

    it("Testing EA Site for assertions", () => {
       // Implicit assertions
        cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should('have.class','ls-nav-active');
        // Explicit assertions
        cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should(($x) => {
            //  expect($x).to.be.null
            expect($x).to.have.class("ls-nav-active");
        })
    })

    it("Testing EA Site for assertions with hooks", () => {
        cy.get("[aria-label='jump to slide 2']", {timeout:60000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active");
        })
    })



})