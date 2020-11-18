/// <reference types="Cypress" />
describe("Test Suite 3 - User Account", ()=>{
    beforeEach(() =>{
        cy.visit("https://www.olx.ro/");
        cy.get('#onetrust-accept-btn-handler').click();
  });
//1.Login 
//Valid Data
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

//Invalid Data
 it("TC14 TM-QA08-567 Unsuccessful Login_1", () => {
    cy.get("body").then(($body) => {
      if ($body.find('#topLoginLink').length) {
        //if the selected item is found in the body, continue actions
        cy.get('#topLoginLink').click();
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(2) > .focusbox > #userEmail").type("stefitau92tu@yahoo.com");
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(3) > .focusbox > [data-cy=login_input_password]").type("Parola%1234");
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > #se_userLogin").click();
       }
     });
   });

 it("TC15 TM-QA08-568 Unsuccessful Login_2", () => {
    cy.get("body").then(($body) => {
      if ($body.find('#topLoginLink').length) {
        //if the selected item is found in the body, continue actions
        cy.get('#topLoginLink').click();
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(2) > .focusbox > #userEmail").type("stefitautu@yahoo.com");
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(3) > .focusbox > [data-cy=login_input_password]").type("parola1234");
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > #se_userLogin").click();
       }
     });
   });

   it("TC16 TM-QA08-569 Unsuccessful Login_3", () => {
    cy.get("body").then(($body) => {
      if ($body.find('#topLoginLink').length) {
        //if the selected item is found in the body, continue actions
        cy.get('#topLoginLink').click();
        //cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(2) > .focusbox > #userEmail").type("stefitautu@yahoo.com");
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(3) > .focusbox > [data-cy=login_input_password]").type("Parola%1234");
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > #se_userLogin").click();
       }
     });
   });
   
   it("TC17 TM-QA08-570 Unsuccessful Login_4", () => {
    cy.get("body").then(($body) => {
      if ($body.find('#topLoginLink').length) {
        //if the selected item is found in the body, continue actions
        cy.get('#topLoginLink').click();
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(2) > .focusbox > #userEmail").type("stefitautu@yahoo.com");
        //cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > :nth-child(3) > .focusbox > [data-cy=login_input_password]").type("Parola%1234");
        cy.get(".login-page > .login-box > .login-tabs > .login-tabs__content > li.active > .login-form > #loginForm > .standard-login-box > #se_userLogin").click();
       }
     });
   });

//2.Make new account
//Valid Data
  it("TC18 TM-QA08-571 Successful new account", () => {
    cy.get('#topLoginLink').click({force:true});
    cy.get('.login-page > .login-box > .login-tabs > .login-tabs__navigation > ul > :nth-child(2) > #register_tab').click({force:true});
    cy.get('.active > #registerForm > :nth-child(3) > .focusbox > #userEmailRegister').type("al_27stefi@yahoo.com");
    cy.get('.active > #registerForm > :nth-child(4) > .focusbox > #userPassRegister').type("Parola%1234");
    cy.get('.active > #registerForm > :nth-child(6) > .focusbox > .login-form__checkbox > :nth-child(2)').click({force:true});
    cy.get('.active > #registerForm > #button_register').click({force:true});
  });

//Invalid Data
 it("TC19 TM-QA08-572 Unsuccessful new account_1", () => {
    cy.get('#topLoginLink').click({force:true});
    cy.get('.login-page > .login-box > .login-tabs > .login-tabs__navigation > ul > :nth-child(2) > #register_tab').click({force:true});
    cy.get('.active > #registerForm > :nth-child(3) > .focusbox > #userEmailRegister').type("stefitautu@yah0o.com");
    cy.get('.active > #registerForm > :nth-child(4) > .focusbox > #userPassRegister').type("Parola%1234");
    cy.get('.active > #registerForm > :nth-child(6) > .focusbox > .login-form__checkbox > :nth-child(2)').click({force:true});
    cy.get('.active > #registerForm > #button_register').click({force:true});
  });  
 it("TC20 TM-QA08-573 Unsuccessful new account_2", () => {
    cy.get('#topLoginLink').click({force:true});
    cy.get('.login-page > .login-box > .login-tabs > .login-tabs__navigation > ul > :nth-child(2) > #register_tab').click({force:true});
    cy.get('.active > #registerForm > :nth-child(3) > .focusbox > #userEmailRegister').type("al_27stefi@yahoo.com");
    cy.get('.active > #registerForm > :nth-child(4) > .focusbox > #userPassRegister').type("abc");
    cy.get('.active > #registerForm > :nth-child(6) > .focusbox > .login-form__checkbox > :nth-child(2)').click({force:true});
    cy.get('.active > #registerForm > #button_register').click({force:true});
  });   
});

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });