/// <reference types="cypress" />
describe('Character page', () => {
  beforeEach(() => {
    cy.visit('#/character/4')
  })

  it('Character page can be opened', () => {
    cy.contains('Beth Smith')
  })

  it('Character page can be display data of character', () => {
    cy.intercept('/graphql', { fixture: 'character.json' }).as('getCharacter')
    cy.reload()
    cy.get('[data-cy="character-content"] h2').first().should('have.text', 'Rick Sanchez')
    cy.get('[data-cy="character-content"] p').should(($p) => {
      expect($p.get(0).innerText).to.eq('Alive - Male Human')
      expect($p.get(1).innerText).to.eq('Location:Citadel of Ricks')
      expect($p.get(2).innerText).to.eq('Origin:Earth (C-137)')
    })
    cy.get('[data-cy="character-content"] span').last().should('have.text', '4/10/2017 18:48')
  })

  it('Character page loading indicator should be show', () => {
    cy.intercept('/graphql').as('getCharacter')
    cy.get('button[data-cy="navigate-next-character"]').click()
    cy.get('[data-cy="loading-indicator"]').should('be.visible')
    cy.wait(['@getCharacter'], { timeout: 10000 })
    cy.get('[data-cy="loading-indicator"]').should('not.exist')
  })

  it('Character page not found can be opened a error page', () => {
    cy.visit('#/character/999999999')
    cy.contains('404')
  })

  it('Character page invalid id should be 404', () => {
    cy.visit('#/character/')
    cy.contains('404')
  })

  it('Character page can navigate to list', () => {
    cy.get('button[data-cy="navigate-back-character"]').click()
    cy.get('input[data-cy="filter-by-name"]').should('exist')
  })

  it('Character page can navigate next', () => {
    cy.intercept('/graphql').as('getCharacter')
    cy.reload()
    cy.wait(['@getCharacter'])
    cy.get('button[data-cy="navigate-next-character"]').click()
    cy.wait(['@getCharacter']).then(intercept => {
      expect(intercept.request.body.variables.id).to.eq('5')
    })
  })

  it('Character page can navigate prev', () => {
    cy.intercept('/graphql').as('getCharacter')
    cy.wait(['@getCharacter'])
    cy.get('button[data-cy="navigate-prev-character"]').click()
    cy.wait(['@getCharacter']).then(intercept => {
      expect(intercept.request.body.variables.id).to.eq('3')
    })
  })
})
