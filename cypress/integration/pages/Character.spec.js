/// <reference types="cypress" />
describe('Character page', () => {
  beforeEach(() => {
    cy.visit('#/character/1')
  })

  it('Character page can be opened', () => {
    cy.contains('Rick Sanchez')
  })

  it('Character page can be display data of character', () => {
    cy.intercept('api/character/*', { fixture: 'character.json' }).as('getCharacter')
    cy.get('[data-cy="character-content"] h2').first().should('have.text', 'Rick Sanchez')
    cy.get('[data-cy="character-content"] p').should(($p) => {
      expect($p.get(0).innerText).to.eq('Alive - Male Human')
      expect($p.get(1).innerText).to.eq('Location:Earth (Replacement Dimension)')
      expect($p.get(2).innerText).to.eq('Origin:Earth (C-137)')
    })
    cy.get('[data-cy="character-content"] span').last().should('have.text', '4/10/2017 19:48')
  })

  it('Character page loading indicator should be show', () => {
    cy.intercept('api/character/*', { fixture: 'character.json', delay: 3000 }).as('getCharacter')
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

  it.only('Character page can navigate next', () => {
    cy.reload()
    cy.intercept('api/character/*', { fixture: 'character.json' }).as('getCharacter')
    cy.get('button[data-cy="navigate-next-character"]').click()
    cy.wait(['@getCharacter']).then(intercept => {
      expect(intercept.request.url).to.match(/\/character\/2/)
    })
  })

  it('Character page can navigate prev', () => {
    cy.intercept('api/character/*', { fixture: 'character.json' }).as('getCharacter')
    cy.visit('#/character/2')
    cy.wait(['@getCharacter'])
    cy.get('button[data-cy="navigate-prev-character"]').click()
    cy.wait(['@getCharacter']).then(intercept => {
      expect(intercept.request.url).to.match(/\/character\/1/)
    })
  })

  it('Character page from character list get character obj', () => {
    cy.visit('#/')
    cy.get('[data-cy="container-list"]').children().first().click()
    cy.get('[data-cy="loading-indicator"]').should('not.exist')
  })
})
