describe('Todo List App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should create a new task', () => {
    const newTaskText = 'Nueva tarea de prueba';
    cy.wait(1000);
    cy.get('.hidden > .justify-between > .add-task-input').should('be.visible').type(newTaskText);
    cy.get('.hidden > .justify-between > .add-task-button').click();
    cy.get('.task-item span').should('contain', newTaskText);
  });

  it('should mark a task as completed', () => {
    cy.get('.task-item:first-child input[type="checkbox"]').click();
    cy.get('.task-item:first-child span').should('have.class', 'line-through');
  });

  it('should delete a task', () => {
    cy.get('.task-item:first-child .delete-task').click();
    cy.get('.task-item span').should('not.contain', 'Nueva tarea de prueba');
  });
});
