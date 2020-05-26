/// <reference types="cypress" />

describe("Test LambdaTest Website XHR", () => {

    beforeEach("Navigate to LambdaTest", () => {
        cy.visit("https://accounts.lambdatest.com/login")
    })

    it("Perform Login and verify XHR", () =>{

        // Start the server
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/user/organization/team'
        }).as('team');

        cy.route({
            method: 'GET',
            url: '/api/user/organization/automation-test-summary'
        }).as('apicheck');

        cy.fixture("lambdaUser").as("lambdauser");

        cy.get("@lambdauser").then((lambdauser) => {
        cy.get("[name='email']").debug().type(lambdauser.UserName);
        cy.get("[name='password']").debug().type(lambdauser.Password, {log:false});
         });

         cy.get("[class='btn btn-dark submit-btn']").click();

         cy.get("@team").then((xhr) => {
             expect(xhr.status).to.eq(200);
             expect(xhr.response.body.data[0]).to.have.property("name","Karthik KK");
             expect(xhr.response.body.data[0]).to.have.property("role","Admin");
         })
         // traffic interception - Explicit Assertions
         cy.get("@apicheck").then(function(xhr){
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body).to.have.property("maxQueue", 10);
        })
        // implicit assertion
        cy.get("@apicheck").its('response.body').should('have.property','maxQueue').and('eql', 10)

    });

    it('Verify LambdaTest cookies', () => {
        cy.fixture("lambdaUser").as("lambdauser");

        cy.get("@lambdauser").then((lambdauser) => {
        cy.get("[name='email']").debug().type(lambdauser.UserName);
        cy.get("[name='password']").debug().type(lambdauser.Password, {log:false});
         });
        cy.get("[class='btn btn-dark submit-btn']").click();

        cy.getCookie('user_id').should('have.property','value','41224');

    })

});