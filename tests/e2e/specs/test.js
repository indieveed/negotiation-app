// https://docs.cypress.io/api/introduction/api.html

describe('Home screen', () => {

  const typeAndSubmitIntoVisible = (value) => {
    const input = cy.get('[role="tabpanel"]').find('input:visible')
    input.type(value)
    cy.get('[role="tabpanel"]').find('form:visible').submit()
  }

  const switchTab = (tabName) => {
    cy.get('[role="tablist"]').contains(tabName).click()
  }

  it('should have tabs', () => {
    cy.visit('/')
    cy.get('[role="tablist"]').should('be.visible')
  })

  it('should have two tabs', () => {
    cy.visit('/')
    cy.get('[role="tablist"]')
      .find('[role="tab"]')
      .should('have.length', 2)
  })
  
  it('should have an employer tab', () => {
    cy.visit('/')
    cy.get('[role="tablist"]')
      .contains('Employer')
      .should('be.visible')
  })
  
  it('should have an employee tab', () => {
    cy.visit('/')
    cy.get('[role="tablist"]')
      .contains('Employee')
      .should('be.visible')
  })
  
  it('should have an input box', () => {
    cy.visit('/')
    cy.get('[role="tabpanel"]')
      .find('input')
      .should('be.visible')
  })
  
  it('should have an input box that accepts numbers only', () => {
    cy.visit('/')
    const input = cy.get('[role="tabpanel"]').find('input:visible')
    input.type('a')
    input.should('have.value', '')
  })
  
  it('should hide input after submitting the value', () => {
    cy.visit('/')
    const input = cy.get('[role="tabpanel"]').find('input:visible')
    input.type('100')
    input.should('have.value', '100')
    cy.get('[role="tabpanel"]').find('form:visible').submit()
    cy.wait(2000)
    input.should('not.be.visible')
  })
  
  it('should show the modal with success', () => {
    cy.visit('/')
    switchTab('Employer')
    typeAndSubmitIntoVisible(1000)
    switchTab('Employee')
    typeAndSubmitIntoVisible(900)
    cy.contains('Success').should('be.visible')
  })
  
  it('should show the modal with failure', () => {
    cy.visit('/')
    switchTab('Employer')
    typeAndSubmitIntoVisible(900)
    switchTab('Employee')
    typeAndSubmitIntoVisible(1000)
    cy.contains('Failure').should('be.visible')
  })
  
  it('should show the modal with success for equal values', () => {
    cy.visit('/')
    switchTab('Employer')
    typeAndSubmitIntoVisible(1000)
    switchTab('Employee')
    typeAndSubmitIntoVisible(1000)
    cy.contains('Success').should('be.visible')
  })
  
})
