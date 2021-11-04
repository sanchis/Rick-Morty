import { getButtonMoveNext, getButtonMovePrev, getContainerList, getFilterInput } from '../../support/CharacterList.selectors'

describe('Character List page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('CharacterList page can be opened', () => {
    getFilterInput().should('exist')
  })

  it('CharacterList page can be filter by name', () => {
    getFilterInput().type('random name ')
    getContainerList().children().should('have.length', 0)
  })

  it('CharacterList page can be paginated next', () => {
    cy.intercept('/api/character?name=&page=*', { fixture: 'characters.json' }).as('getCharacters')
    cy.reload()
    cy.wait('@getCharacters')
    getButtonMoveNext().first().click()
    cy.wait('@getCharacters').then(intercept => {
      expect(intercept.request.url).to.match(/\page=2/)
    })
  })

  it('CharacterList page disable buttons when page is loading', () => {
    cy.intercept('/api/character?name=&page=*', { fixture: 'characters.json', delay: 5000 }).as('getCharacters')
    cy.reload()
    getButtonMovePrev().first().should('be.disabled')
    getButtonMoveNext().first().should('be.disabled')
  })

  it('CharacterList page can be paginated prev', () => {
    cy.intercept('api/character?*', { fixture: 'characters-prev.json' }).as('getCharacters')
    cy.reload()
    cy.wait('@getCharacters')
    getButtonMoveNext().first().click()
    cy.wait(['@getCharacters'])
    getButtonMovePrev().first().click()
    cy.wait(['@getCharacters']).then(intercept => {
      expect(intercept.request.url).to.match(/\page=1/)
    })
  })

  it('CharacterList page paginate prev buttons can be disabled', () => {
    cy.intercept('api/character?*', { fixture: 'characters.json' }).as('getCharacters')
    getButtonMovePrev().first().should('be.disabled')
  })

  it('CharacterList page paginate next buttons can be disabled', () => {
    cy.intercept('api/character?*', { fixture: 'charactersListLimit.json' }).as('getCharacters')
    cy.reload()
    getButtonMoveNext().first().should('be.disabled')
  })
})
