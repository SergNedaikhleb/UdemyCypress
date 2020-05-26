/// <reference types="cypress" />

describe("Test API from the Fake JSON server", () => {
    
    beforeEach("DELETE before creating a new value", ()=> {
        cy.request({
            method:'DELETE',
            url:'http://localhost:3000/posts/2',
            failOnStatusCode:false
        }).then((x) =>{
            expect(x.body).to.be.empty
        })
    })

    it("Test GET function", () => {
        cy.request("http://localhost:3000posts/1").its('body').should('have.property','id');
    })
    it("Test POST functionality of JSON Server", () => {
        cy.request({
            method:'POST',
            url:'http://localhost:3000/posts',
            body: {
                "id": 2,
                "title": "Executeautomation",
                "author":"karthikKK"
            }
        }).then((res) =>{
            expect(res.body).has.property("title", "Executeautomator");
        })
    })

    it("Test GET function", () => {
        cy.request("http://localhost:3000posts/1").its('body').should('have.property','id');
    })

    it('API testing', () => {
        
        cy.request({
            method:'POST',
            url:'http://eaapp.somee.com/Account/Login',
            body: {
                "__RequestVerificationToken": "K1CzVP0pbXehUpKxNN2iRu-RCXpX_FmoVWvOfN9IC47SjmEh5e5UJdvQ2_FLo0wtj2t3imdNr3krd4H3NOYpGZNk3j_ComQAH--H5jUTltg1",
                "UserName": "admin",
                "Password": "password",
                "RememberMe": "false"
            },
            failOnStatusCode:false
        }).then(($res) =>{
            expect($res.status).to.eq(500);
            expect($res.body).to.contain('<i>The required anti-forgery cookie &quot;__RequestVerificationToken: is not present.</i>');
        })
    });

});