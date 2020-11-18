/// <reference types="Cypress" />
describe("Test Suite 2 - Search Bar", ()=>{
    beforeEach(() =>{
        cy.visit("https://www.olx.ro/");
        cy.get('#onetrust-accept-btn-handler').click();
  });

 //Valid Data
it("TC5 TC5: TM-QA08-558 Enter a valid word in the search bar", () => {
        cy.get('.clearbox').type("Samsung S20");
        cy.get('[data-cy=homepage_button_search]').click({force:true});
 });

it("TC6 TC5: TM-QA08-559 Enter a valid word and a specific area in the search bar", () => {
    cy.get('.clearbox').type("Samsung S20");
    cy.wait(5000);
    cy.get('[data-cy=homepage_input_locationsearch]').click({force:true});
    cy.get(':nth-child(4) > :nth-child(4) > .regionlink').click({force:true});
    cy.get('#a-region-97487').click({force:true});
    cy.get('[data-cy=homepage_button_search]').click({force:true});
 });

it("TC7 TM-QA08-560 Enter a valid word, specific area and a range of distance in the search bar", () => {
    cy.get('.clearbox').type("Samsung S20");
    cy.wait(5000);
    cy.get('[data-cy=homepage_input_locationsearch]').click({force:true});
    cy.get(':nth-child(4) > :nth-child(4) > .regionlink').click({force:true});
    cy.get('#a-region-97487').click({force:true});
    cy.get('[data-cy=homepage_button_search]').click({force:true});
    cy.wait(3000);
    cy.get('dt > .topLink').click({force:true});
    cy.get(':nth-child(9) > .dist').click({force:true});  
    //cy.get('#search-submit').click({force:true}); 
 });

//Invalid Data
it("TC8 TM-QA08-561 Enter invalid data in the search bar", () => {
    cy.get('.clearbox').type("abcdef");
    cy.get('[data-cy=homepage_button_search]').click({force:true});
 });

it("TC9 TM-QA08-562 Enter invalid data like numbers and special characters in the search bar", () => {
    cy.get('.clearbox').type("12abffb&@#xc9");
    cy.get('[data-cy=homepage_button_search]').click({force:true});
 });

//Minimum and maximum number of characters
it("TC10 TM-QA08-563 Enter min. amount of characters in the search bar", () => {
    cy.get('.clearbox').type("A");
    cy.get('[data-cy=homepage_button_search]').click({force:true});
 });

it("TC11 TM-QA08-564 Enter max. amount of characters in the search bar", () => {
    cy.get('.clearbox').type("fdfgfbfgnbfgndjfrijekjfidjmdvjoidfvnfvkjf31d1f354d6315465165451355320321323265656452565233kjkhjhhvdtfjhfrftrjynvucvnfjkkvfioo8978766tyghvfgdtgcngnhhnfjyfnhvhgvhfhgvjhhmmhghbvhmghvhvhguyyiyiyiuyuyu7tut7687yuyt5ryfhgvhfdrfdgfghfhjgyutguyt7uytuyygjgjuo;k");
    cy.get('[data-cy=homepage_button_search]').click({force:true});
 });

it("TC12 TM-QA08-565 Enter over max. amount of characters in the search bar", () => {
    cy.get('.clearbox').type("fdfgfbfgnbfgndjfrijekjfidjmdvjoidfvnfvkjf31d1f354d6315465165451355320321323265656452565233kjkhjhhvdtfjhfrftrjynvucvnfjkkvfioo8978766tyghvfgdtgcngnhhnfjyfnhvhgvhfhgvjhhmmhghbvhmghvhvhguyyiyiyiuyuyu7tut7687yuyt5ryfhgvhfdrfdgfghfhjgyutguyt7uytuyygjgjuo;klmno");
    cy.get('[data-cy=homepage_button_search]').click({force:true});
 });
});

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  