describe('Error page', () => {
  beforeEach(() => {
    cy.visit('#/error/404')
  })

  it('Error page can be opened', () => {
    cy.contains('404')
  })
})
