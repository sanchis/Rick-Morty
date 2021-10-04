/// <reference types="cypress" />

import { getButtonBack, getButtonMoveNext, getButtonMovePrev, getCharacterContent, getLoadingIndicator } from '../../support/Character.selectors'
import { getContainerList, getFilterInput } from '../../support/CharacterList.selectors'

describe('Character page', () => {
  beforeEach(() => {
    cy.visit('#/character/1')
  })

  it('Character page can be opened', () => {
    cy.contains('Rick Sanchez')
  })

  it('Character page can be display data of character', () => {
    cy.intercept('api/character/*', { fixture: 'character.json' }).as('getCharacter')
    getCharacterContent().get('h2').first().should('have.text', 'Rick Sanchez')
    getCharacterContent().get('p').should(($p) => {
      expect($p.get(0).innerText).to.eq('Alive - Male Human')
      expect($p.get(1).innerText).to.eq('Location:Earth (Replacement Dimension)')
      expect($p.get(2).innerText).to.eq('Origin:Earth (C-137)')
    })
    getCharacterContent().get('span').last().should('have.text', '4/10/2017 18:48')
  })

  it('Character page loading indicator should be show', () => {
    cy.intercept('api/character/*', { fixture: 'character.json', delay: 3000 }).as('getCharacter')
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
    cy.intercept('api/character/*', { fixture: 'character.json' }).as('getCharacter')
    cy.reload()
    cy.wait(['@getCharacter'])
    getButtonMoveNext().click()
    cy.wait(['@getCharacter']).then(intercept => {
      expect(intercept.request.url).to.match(/\/character\/2/)
    })
  })

  it('Character page can navigate prev', () => {
    cy.intercept('api/character/*', { fixture: 'character.json' }).as('getCharacter')
    cy.visit('#/character/2')
    cy.wait(['@getCharacter'])
    getButtonMovePrev().click()
    cy.wait(['@getCharacter']).then(intercept => {
      expect(intercept.request.url).to.match(/\/character\/1/)
    })
  })

  it('Character page from character list get character obj from context', () => {
    cy.visit('#/')
    getContainerList().children().first().click()
    getLoadingIndicator().should('not.exist')
  })
})
