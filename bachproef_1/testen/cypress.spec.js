context('Simple test', () => {
    
  beforeEach(() => {
    cy.visit('')
    cy.get('#block-bartik-page-title h1').should('contain', 'Welcome to Cypress')
    cy.get('#block-bartik-account-menu .content ul li a').click()
    cy.get('input[name=name]').type('admin')
    cy.get('input[name=pass]').type('admin')
    cy.get('#user-login-form').submit()
    cy.get('#block-bartik-page-title h1').should('contain', 'admin')
  })
  
  it('Create a basic page and deleting that page', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('uncaught error handling')
        done()
        return false
    })
    cy.get('#toolbar-link-system-admin_content').click()
    cy.get('ul.action-links li a').contains('Add content').click()
    cy.get('ul.admin-list li a').contains('Basic page').click()
    cy.get('#edit-title-0-value').type('Een nieuwe node')
    cy.get('#node-page-form').submit()
    cy.get('#block-bartik-page-title h1').should('contain', 'Een nieuwe node')
    cy.get('nav.tabs ul li').contains('Delete').click()
    cy.get('#block-seven-page-title').should('contain', 'Are you sure you want to delete the content Een nieuwe node?')
    cy.get('#node-page-delete-form').submit()
  })
  
  afterEach(() => {
    cy.get('#block-bartik-account-menu ul li a').contains('Log out').click({force: true})
  })
})