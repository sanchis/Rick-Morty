import { getButtonMoveNext, getButtonMovePrev, getContainerList, getFilterInput } from '../../support/CharacterList.selectors'

describe('Character List page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('CharacterList page can be opened', () => {
    getFilterInput().should('exist')
  })

  it('CharacterList page can be filter by name', () => {
    cy.intercept('/graphql').as('getCharacters')
    getFilterInput().type('random name ')
    cy.wait('@getCharacters')
    getContainerList().children().should('have.length', 0)
  })

  it('CharacterList page can be paginated next', () => {
    cy.intercept('/graphql', { fixture: 'characters.json' }).as('getCharacters')
    cy.wait('@getCharacters')
    getButtonMoveNext().first().click()
    cy.wait('@getCharacters').then(intercept => {
      expect(intercept.request.body.variables.page).to.eq(2)
    })
  })

  it('CharacterList page disable buttons when page is loading', () => {
    cy.intercept('/graphql', { fixture: 'characters.json', delay: 25000 }).as('getCharacters')
    cy.reload()
    getButtonMovePrev().first().should('be.disabled')
    getButtonMoveNext().first().should('be.disabled')
  })

  it('CharacterList page can be paginated prev', () => {
    cy.intercept('/graphql', { fixture: 'characters-prev.json' }).as('getCharacters')
    cy.wait('@getCharacters')
    getButtonMoveNext().first().click()
    cy.wait(['@getCharacters'])
    getButtonMovePrev().first().click()
    cy.wait(['@getCharacters']).then(intercept => {
      expect(intercept.request.body.variables.page).to.eq(0)
    })
  })

  it('CharacterList page paginate prev buttons can be disabled', () => {
    cy.intercept('/graphql', { fixture: 'characters.json' }).as('getCharacters')
    getButtonMovePrev().first().should('be.disabled')
  })

  it('CharacterList page paginate next buttons can be disabled', () => {
    cy.intercept('/graphql', { fixture: 'charactersListLimit.json' }).as('getCharacters')
    cy.reload()
    getButtonMoveNext().first().should('be.disabled')
  })
})
