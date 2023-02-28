describe('Create Admin account', () => {
  it('Click Quản lý người dùng on the left menu', () => {
    cy.visit('https://b2b.balance.ari.com.vn/home#/auth/login')
    cy.get('#email').type('abc@gmail.com')
    cy.get('#password').type('123456')
    cy.wait(1000)
    cy.get('#submit-btn').click()
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})