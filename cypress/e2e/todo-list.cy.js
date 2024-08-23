describe('Todo List App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
      statusCode: 200,
      body: [
        { id: 1, title: 'Mock task one', body: 'Description one' },
        { id: 2, title: 'Mock task two', body: 'Description two' },
        { id: 3, title: 'Mock task three', body: 'Description three' },
      ]
    }).as('getPosts')
    cy.visit('http://localhost:3000')
  })

  it('should load mocked todos', () => {
    cy.wait('@getPosts')
    cy.get('[data-cy="task-list"]').should('be.visible')
    cy.get('[data-cy="task-item"]').should('have.length', 3)
    cy.get('[data-cy="task-item"]').each(($el, index) => {
      const mockedTasks = ['Mock task one', 'Mock task two', 'Mock task three']
      cy.wrap($el).should('contain.text', mockedTasks[index])
    })
  })
})
