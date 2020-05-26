/// <reference types="cypress" />

context('Action', () => {
    beforeEach(() => {
        // Visit Demo Website ExecuteAutomation Website - Reading from environment variables
        cy.visit("https://fineuploader.com/demos.html");
    })

    it("File upload demo", () => {
        cy.fixture('EAWeekly.jpg','base64').then(fileContent => {
            cy.get('.buttons > .qq-upload-button-selector > input').upload({
                fileContent,
                fileName: 'EAWeekly.jpg',
                mimeType: 'image/png'
            },
            {
                uploadType: 'input'
            })
        });
    })
});