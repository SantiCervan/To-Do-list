describe('Todo List App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
      statusCode: 200,
      body: [
        { id: 1, title: 'Tarea mockeada 1', body: 'Descripción 1' },
        { id: 2, title: 'Tarea mockeada 2', body: 'Descripción 2' },
        { id: 3, title: 'Tarea mockeada 3', body: 'Descripción 3' },
      ]
    }).as('getPosts');
    cy.visit('http://localhost:3000');
    cy.wait('@getPosts');
  });

  it('should create a new task', () => {
    const newTaskText = 'Nueva tarea de prueba';
    cy.get('[data-cy="div-add-task"] > [data-cy="add-task-form"] > [data-cy="add-task-input"]').should('be.visible').type(newTaskText);
    cy.get('.hidden > .justify-between > [data-cy="add-task-button"]').click();
    cy.get('[data-cy="task-list"] > :nth-child(1)').should('contain', newTaskText);
  });


  it('should mark a task as completed and uncompleted', () => {
    cy.get(':nth-child(1) > [data-cy="task-checkbox"]').click();
    cy.get(':nth-child(1) > [data-cy="task-item-div-span"] > [data-cy="task-item-span"]').should('have.class', 'line-through');

    cy.get(':nth-child(1) > [data-cy="task-checkbox"]').click();
    cy.get(':nth-child(1) > [data-cy="task-item-div-span"] > [data-cy="task-item-span"]').should('not.have.class', 'line-through');
  });


  it('should delete a task', () => {
    cy.get('[data-cy="task-item"]').its('length').then((initialLength) => {
      cy.get(':nth-child(1) > [data-cy="delete-task"]').click();
      cy.get('[data-cy="task-list"] > :nth-child(1)').should('not.contain', 'Tarea mockeada 1');
      cy.get('[data-cy="task-item"]').should('have.length', initialLength - 1);
    });
  });

});
