/// <reference types="Cypress" />
describe("Test Suite 4 - Buyer", ()=>{
    beforeEach(() =>{
        cy.visit("https://www.olx.ro/");
        cy.get('#onetrust-accept-btn-handler').click();
  });
//Browse or Search in adverts 
it("TC13 TM-QA08-566 Successful Login", () => {
    cy.get("body").then(($body) => {
      if ($body.find('#topLoginLink').length) {
        //if the selected item is found in the body, continue actions
        cy.get('#topLoginLink').click();
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(2) > .focusbox > #userEmail").type("stefitautu@yahoo.com");
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(3) > .focusbox > [data-cy=login_input_password]").type("Parola%1234");
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > #se_userLogin").click();
       }
     });
   });  

it("TC21 TM-QA08-574 Search for Cars and accesories from the main categories", () => {
    cy.get(':nth-child(2) > :nth-child(1) > .item > .link > .cat-icon').click({force:true});
    cy.get('#bottom5 > ul > :nth-child(4) > .link-relatedcategory > .link > span').click({force:true});
 });    

it("TC22 TM-QA08-575  Search for Electronic Devices from the main categories", () => {
    cy.get(':nth-child(4) > .item > .link').click({force:true});
    cy.get('#bottom99 > ul > :nth-child(3) > .link-relatedcategory > .link > span').click({force:true});
 });

//Usage of filters
it("TC23 TM-QA08-576 Search for adverts from main category /Cars and accesories/ with 1 special filter", () => {
    cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
    cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
    cy.wait(6000);
    cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
    cy.wait(6000);
    cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
    cy.get('.selected > .small').should("contain","AUDI");
});

it("TC24 TM-QA08-577 Search for adverts from main category /Cars and accesories/ with 2 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(6000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(6000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(6000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.get(':nth-child(2) > .offer > .offer-wrapper > .fixed > tbody > :nth-child(1) > .title-cell > .space > .lheight22').should("contain","Audi A4");
});

it("TC25 TM-QA08-578 Search for adverts from main category /Cars and accesories/ with 3 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(8000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(8000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //3-rd filter price range
  cy.get('#param_price > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_price > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.get(':nth-child(8) > .offer > .offer-wrapper > .fixed > tbody > :nth-child(1) > .wwnormal > .space > .price > strong').should("contain","9 350 €");
});

it("TC26 TM-QA08-579 Search for adverts from main category /Cars and accesories/ with 4 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(8000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(8000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //3-rd filter price range
  cy.get('#param_price > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.wait(8000);
  cy.get('#param_price > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //4-th filter year of manufacture
  cy.get('#param_year > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(14) > .tdnone').click({force:true});
  cy.get('#param_year > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(27) > .tdnone').click({force:true});
  cy.get(':nth-child(36) > .offer > .offer-wrapper > .fixed > tbody > :nth-child(1) > .title-cell > .space > .lheight22 > [data-cy=listing-ad-title] > strong').should("contain","Audi", "A4", "2010");
});

it("TC27 TM-QA08-580 Search for adverts from main category /Cars and accesories/ with 5 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(8000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(8000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //3-rd filter price range
  cy.get('#param_price > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.wait(8000);
  cy.get('#param_price > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //4-th filter year of manufacture
  cy.get('#param_year > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(14) > .tdnone').click({force:true});
  cy.get('#param_year > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(27) > .tdnone').click({force:true});
  cy.wait(8000);
  //5-th filter turnover
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(2) > .tdnone').click({force:true});
  cy.get(':nth-child(2) > :nth-child(4) > .offer > .offer-wrapper > .fixed > tbody > :nth-child(1) > .title-cell > .space > .lheight22').should("contain","118.000km");
});
 
it("TC28 TM-QA08-581 Search for adverts from main category /Cars and accesories/ with 6 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(8000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(8000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //3-rd filter price range
  cy.get('#param_price > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.wait(8000);
  cy.get('#param_price > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //4-th filter year of manufacture
  cy.get('#param_year > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(14) > .tdnone').click({force:true});
  cy.get('#param_year > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(27) > .tdnone').click({force:true});
  cy.wait(8000);
  //5-th filter turnover
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(2) > .tdnone').click({force:true});
  cy.wait(8000);
  //6-th filter engine capacity
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(5) > .tdnone').click({force:true});
  //cy.get(':nth-child(2) > :nth-child(4) > .offer > .offer-wrapper > .fixed > tbody > :nth-child(1) > .title-cell > .space > .lheight22').should("contain","118.000km");
});

it("TC29 TM-QA08-583 Search for adverts from main category /Cars and accesories/ with 7 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(8000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(8000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //3-rd filter price range
  cy.get('#param_price > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.wait(8000);
  cy.get('#param_price > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //4-th filter year of manufacture
  cy.get('#param_year > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(14) > .tdnone').click({force:true});
  cy.get('#param_year > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(27) > .tdnone').click({force:true});
  cy.wait(8000);
  //5-th filter turnover
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(2) > .tdnone').click({force:true});
  cy.wait(8000);
  //6-th filter engine capacity
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(5) > .tdnone').click({force:true});
  cy.wait(8000);
  //7-th filter condition
  cy.get('#param_state > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_state > .filter-item > .small > :nth-child(2) > .select-only-this-opiton > span').click({force:true});
  cy.get('.selected > .small').should("contain","SECOND HAND");
});

it("TC30 TM-QA08-584 Search for adverts from main category /Cars and accesories/ with 8 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(8000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(8000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //3-rd filter price range
  cy.get('#param_price > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.wait(8000);
  cy.get('#param_price > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //4-th filter year of manufacture
  cy.get('#param_year > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(14) > .tdnone').click({force:true});
  cy.get('#param_year > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(27) > .tdnone').click({force:true});
  cy.wait(8000);
  //5-th filter turnover
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(2) > .tdnone').click({force:true});
  cy.wait(8000);
  //6-th filter engine capacity
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(5) > .tdnone').click({force:true});
  cy.wait(8000);
  //7-th filter condition
  cy.get('#param_state > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_state > .filter-item > .small > :nth-child(2) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //8-th filter type of fuel
  cy.get('#param_petrol > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_petrol > .filter-item > .small > :nth-child(3) > .select-only-this-opiton > span').click({force:true});
  cy.get(':nth-child(30) > .offer > .offer-wrapper > .fixed > tbody > :nth-child(1) > .title-cell > .space > .lheight22').should("contain","TDI");
});

it("TC31 TM-QA08-585 Search for adverts from main category /Cars and accesories/ with 9 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(8000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(8000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //3-rd filter price range
  cy.get('#param_price > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.wait(8000);
  cy.get('#param_price > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //4-th filter year of manufacture
  cy.get('#param_year > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(14) > .tdnone').click({force:true});
  cy.get('#param_year > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(27) > .tdnone').click({force:true});
  cy.wait(8000);
  //5-th filter turnover
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(2) > .tdnone').click({force:true});
  cy.wait(8000);
  //6-th filter engine capacity
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(5) > .tdnone').click({force:true});
  cy.wait(8000);
  //7-th filter condition
  cy.get('#param_state > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_state > .filter-item > .small > :nth-child(2) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //8-th filter type of fuel
  cy.get('#param_petrol > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_petrol > .filter-item > .small > :nth-child(3) > .select-only-this-opiton > span').click({force:true});
  //9-th filter car body
  cy.get('#param_car_body > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_car_body > .filter-item > .small > :nth-child(3) > .select-only-this-opiton').click({force:true});
  cy.get(':nth-child(2) > [rel=""] > .offer > .offer-wrapper > .fixed > tbody > :nth-child(1) > .title-cell > .space > .lheight22 > [data-cy=listing-ad-title] > strong').should("contain","Berlina");
});

it("TC32 TM-QA08-586 Search for adverts from main category /Cars and accesories/ with 10 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(8000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(8000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //3-rd filter price range
  cy.get('#param_price > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.wait(8000);
  cy.get('#param_price > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //4-th filter year of manufacture
  cy.get('#param_year > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(14) > .tdnone').click({force:true});
  cy.get('#param_year > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(27) > .tdnone').click({force:true});
  cy.wait(8000);
  //5-th filter turnover
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(2) > .tdnone').click({force:true});
  cy.wait(8000);
  //6-th filter engine capacity
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(5) > .tdnone').click({force:true});
  cy.wait(8000);
  //7-th filter condition
  cy.get('#param_state > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_state > .filter-item > .small > :nth-child(2) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //8-th filter type of fuel
  cy.get('#param_petrol > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_petrol > .filter-item > .small > :nth-child(3) > .select-only-this-opiton > span').click({force:true});
  //9-th filter car body
  cy.get('#param_car_body > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_car_body > .filter-item > .small > :nth-child(3) > .select-only-this-opiton').click({force:true});
  //10-th filter color
  cy.get('#param_color > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_color > .filter-item > .small > :nth-child(3) > .select-only-this-opiton > span').click({force:true});
  cy.get(':nth-child(4) > .offer > .offer-wrapper > .fixed > tbody > :nth-child(1) > .title-cell > .space > .lheight22 > [data-cy=listing-ad-title] > strong').should("contain","B8");
});

it("TC33 TM-QA08-587 Search for adverts from main category /Cars and accesories/ with 11 special filter", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .item > .link').click({force:true});
  cy.get('#bottom5 > ul > :nth-child(1) > .link-relatedcategory').click({force:true});
  cy.wait(8000);
  //1-st filter brand
  cy.get('#param_subcat > .filter-item > .button > .icon').click({force:true});
  cy.wait(8000);
  cy.get('.suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //2-nd filter model
  cy.get('#param_model > .filter-item > .button > .icon').click({force:true});
  cy.get(':nth-child(9) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //3-rd filter price range
  cy.get('#param_price > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.wait(8000);
  cy.get('#param_price > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(4) > .tdnone').click({force:true});
  cy.wait(8000);
  //4-th filter year of manufacture
  cy.get('#param_year > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('.filter-item-from > .suggestinput > :nth-child(14) > .tdnone').click({force:true});
  cy.get('#param_year > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('.filter-item-to > .suggestinput > :nth-child(27) > .tdnone').click({force:true});
  cy.wait(8000);
  //5-th filter turnover
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_rulaj_pana > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(2) > .tdnone').click({force:true});
  cy.wait(8000);
  //6-th filter engine capacity
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-from > .suggestinput > :nth-child(1) > .tdnone').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .button > .header').click({force:true});
  cy.get('#param_enginesize > .filter-both-item > .filter-item-to > .suggestinput > :nth-child(5) > .tdnone').click({force:true});
  cy.wait(8000);
  //7-th filter condition
  cy.get('#param_state > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_state > .filter-item > .small > :nth-child(2) > .select-only-this-opiton > span').click({force:true});
  cy.wait(8000);
  //8-th filter type of fuel
  cy.get('#param_petrol > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_petrol > .filter-item > .small > :nth-child(3) > .select-only-this-opiton > span').click({force:true});
  //9-th filter car body
  cy.get('#param_car_body > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_car_body > .filter-item > .small > :nth-child(3) > .select-only-this-opiton').click({force:true});
  //10-th filter color
  cy.get('#param_color > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_color > .filter-item > .small > :nth-child(3) > .select-only-this-opiton > span').click({force:true});
  //11-th filter gearbox
  cy.get('#param_gearbox > .filter-item > .button > .icon').click({force:true});
  cy.get('#param_gearbox > .filter-item > .small > :nth-child(2) > .select-only-this-opiton').click({force:true});
  cy.get('[data-cy=listing-ad-title] > strong').should("contain","Audi A4");
});

});

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });