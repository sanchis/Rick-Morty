describe('Character List page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('CharacterList page can be opened', () => {
    cy.contains('input[placeholder="Search by name"')
  })

  it('CharacterList page can be filter by name', () => {
    cy.get('input[placeholder="Search by name"]').type('random name ')
    cy.get('.container-list').children().should('have.length', 0)
  })

  it('CharacterList page can be paginated next', () => {
    cy.intercept('/api/character?name=&page=*', { fixture: 'characters.json' }).as('getCharacters')
    cy.get('button.filter-move-next').first().click()
    cy.wait('@getCharacters').then(intercept => {
      expect(intercept.request.url).to.match(/\page=2/)
    })
  })

  it('CharacterList page disable buttons when page is loading', () => {
    cy.get('button.filter-move-prev').first().should('be.disabled')
    cy.get('button.filter-move-next').first().should('be.disabled')
  })

  it('CharacterList page can be paginated prev', () => {
    cy.intercept('api/character?*', { fixture: 'characters-prev.json' }).as('getCharacters')
    cy.get('button.filter-move-next').first().click()
    cy.wait(['@getCharacters'])
    cy.get('button.filter-move-prev').first().click()
    cy.wait(['@getCharacters']).then(intercept => {
      expect(intercept.request.url).to.match(/\page=1/)
    })
  })

  it('CharacterList page paginate prev buttons can be disabled', () => {
    cy.intercept('api/character?*', { fixture: 'characters.json' }).as('getCharacters')
    cy.get('button.filter-move-prev').first().should('be.disabled')
  })

  it('CharacterList page paginate next buttons can be disabled', () => {
    cy.intercept('api/character?*', { fixture: 'charactersListLimit.json' }).as('getCharacters')
    cy.reload()
    cy.get('button.filter-move-next').first().should('be.disabled')
  })
})
