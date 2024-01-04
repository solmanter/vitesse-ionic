const BASE_URL = 'http://localhost:3000'

context('Basic', () => {
  beforeEach(() => {
    cy.visit(BASE_URL)
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', `${BASE_URL}/`)

    cy.contains('[Home Layout]')
      .should('exist')

    cy.get('#van-field-1-input')
      .type('Vitesse{Enter}')
      .url()
      .should('eq', `${BASE_URL}/hi/Vitesse`)

    cy.get('[btn]')
      .click()
      .url()
      .should('eq', `${BASE_URL}/`)
  })

  it('markdown', () => {
    cy.get('[data-test-id="about"]')
      .click()
      .url()
      .should('eq', `${BASE_URL}/about`)

    cy.contains('[Default Layout]')
      .should('exist')

    cy.get('.shiki')
      .should('exist')
  })

  it('theme change', () => {
    const toggle = cy.get('[data-test-id="toggle_theme"]')

    toggle.click()

    cy.get('html').should('have.class', 'van-theme-light')

    toggle.click()

    cy.get('html').should('have.class', 'van-theme-dark')
  })
})
