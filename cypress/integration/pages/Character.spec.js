/// <reference types="cypress" />

import { getButtonBack, getButtonMoveNext, getButtonMovePrev, getCharacterContent, getLoadingIndicator } from '../../support/Character.selectors'
import { getFilterInput } from '../../support/CharacterList.selectors'

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
    getCharacterContent().get('h2').first().should('have.text', 'Rick Sanchez')
    getCharacterContent().get('p').should(($p) => {
      expect($p.get(0).innerText).to.eq('Alive - Male Human')
      expect($p.get(1).innerText).to.eq('Location:Citadel of Ricks')
      expect($p.get(2).innerText).to.eq('Origin:Earth (C-137)')
    })
    getCharacterContent().get('span').last().should('have.text', '4/10/2017 18:48')
  })

  it('Character page loading indicator should be show', () => {
    cy.intercept('/graphql').as('getCharacter')
    getButtonMoveNext().click()
    getLoadingIndicator().should('be.visible')
    cy.wait(['@getCharacter'], { timeout: 10000 })
    getLoadingIndicator().should('not.exist')
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
    getButtonBack().click()
    getFilterInput().should('exist')
  })

  it('Character page can navigate next', () => {
    cy.intercept('/graphql').as('getCharacter')
    cy.reload()
    cy.wait(['@getCharacter'])
    getButtonMoveNext().click()
    cy.wait(['@getCharacter']).then(intercept => {
      expect(intercept.request.body.variables.id).to.eq('5')
    })
  })

  it('Character page can navigate prev', () => {
    cy.intercept('/graphql').as('getCharacter')
    cy.reload()
    cy.wait(['@getCharacter'])
    getButtonMovePrev().click()
    cy.wait(['@getCharacter']).then(intercept => {
      expect(intercept.request.body.variables.id).to.eq('3')
    })
  })
})
