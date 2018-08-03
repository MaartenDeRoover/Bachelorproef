/// <reference types="Cypress" />

context('Simple test', () => {
    
  beforeEach(() => {
    cy.visit('')
    cy.get('#block-bartik-page-title h1').should('contain', 'Welcome to Cypress')
    cy.get('#block-bartik-account-menu .content ul li a').click()
    cy.get('input[name=name]').type('admin')
    cy.get('input[name=pass]').type('admin')
    cy.get('#user-login-form').submit();
    cy.get('#block-bartik-page-title h1').should('contain', 'admin')
  })
  
  it('Create a basic page and deleting that page', () => {
    cy.visit('/node/add/page')
    cy.get('#edit-title-0-value').type('A new node')
    cy.get('#node-page-form').submit();
    cy.url().should('include', '/node/')
    cy.get('#block-bartik-page-title h1').should('contain', 'A new node')
    cy.get('nav.tabs ul li').contains('Delete').click()
    cy.get('#node-page-delete-form').submit()
  })
  
  afterEach(() => {
    cy.get('#block-bartik-account-menu ul li a').contains('Log out').click({force: true})
    cy.get('#block-bartik-page-title h1').should('contain', 'Welcome to Cypress')
  })
})