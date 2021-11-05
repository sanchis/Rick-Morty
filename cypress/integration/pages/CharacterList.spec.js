describe('Character List page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('CharacterList page can be opened', () => {
    cy.get('input[data-cy="filter-by-name"]').should('exist')
  })

  it('CharacterList page can be filter by name', () => {
    cy.intercept('/graphql').as('getCharacters')
    cy.get('input[data-cy="filter-by-name"]').type('random name ')
    cy.wait('@getCharacters')
    cy.get('[data-cy="container-list"]').children().should('have.length', 0)
  })

  it('CharacterList page can be paginated next', () => {
    cy.intercept('/graphql', { fixture: 'characters.json' }).as('getCharacters')
    cy.wait('@getCharacters')
    cy.get('button[data-cy="filter-move-next"]').first().click()
    cy.wait('@getCharacters').then(intercept => {
      expect(intercept.request.body.variables.page).to.eq(2)
    })
  })

  it('CharacterList page disable buttons when page is loading', () => {
    cy.intercept('/graphql', { fixture: 'characters.json', delay: 25000 }).as('getCharacters')
    cy.reload()
    cy.get('button[data-cy="filter-move-prev"]').first().should('be.disabled')
    cy.get('button[data-cy="filter-move-next"]').first().should('be.disabled')
  })

  it('CharacterList page can be paginated prev', () => {
    cy.intercept('/graphql', { fixture: 'characters-prev.json' }).as('getCharacters')
    cy.wait('@getCharacters')
    cy.get('button[data-cy="filter-move-next"]').first().click()
    cy.wait(['@getCharacters'])
    cy.get('button[data-cy="filter-move-prev"]').first().click()
    cy.wait(['@getCharacters']).then(intercept => {
      expect(intercept.request.body.variables.page).to.eq(1)
    })
  })

  it('CharacterList page paginate prev buttons can be disabled', () => {
    cy.intercept('/graphql', { fixture: 'characters.json' }).as('getCharacters')
    cy.get('button[data-cy="filter-move-prev"]').first().should('be.disabled')
  })

  it('CharacterList page paginate next buttons can be disabled', () => {
    cy.intercept('/graphql', { fixture: 'charactersListLimit.json' }).as('getCharacters')
    cy.reload()
    cy.get('button[data-cy="filter-move-next"]').first().should('be.disabled')
  })
})
