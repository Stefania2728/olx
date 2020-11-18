/// <reference types="Cypress" />
describe("Test Suite 1 - Main categories", ()=>{
    it("TC1 TM-QA08-554 Search for Cars from the menu", () => {
        cy.visit("https://www.olx.ro/");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
        cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
     });    

    it("TC2 TM-QA08-555  Search for Real Estate from the menu", () => {
        cy.visit("https://www.olx.ro/");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get(':nth-child(2) > :nth-child(2) > .item > .link > .cat-icon').click({force:true});
        cy.get('#bottom3 > ul > :nth-child(3) > .link-relatedcategory > .link > span').click({force:true});
     });      

    it("TC3 TM-QA08-556 Search for Electronic Devices from the menu", () => {
        cy.visit("https://www.olx.ro/");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get(':nth-child(4) > .item > .link > .cat-icon').click({force:true});
        cy.get('#bottom99 > ul > :nth-child(1) > .link-relatedcategory > .link > span').click({force:true});
     });  
    
    it("TC4 TM-QA08-557 Search for Jobs from the menu", () => {
        cy.visit("https://www.olx.ro/");
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get(':nth-child(3) > .item > .link').click({force:true});
        cy.get('#bottom4 > ul > :nth-child(16) > .link-relatedcategory').click({force:true});
     });      
});

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  