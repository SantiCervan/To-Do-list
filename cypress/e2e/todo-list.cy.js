describe('Todo List App', () => {
  it('should load todos from JSONPlaceholder API', () => {
    cy.visit('http://localhost:3000')

    cy.get('.task-list').should('be.visible')

    cy.get('.task-item').should('have.length.greaterThan', 0)

    cy.request('https://jsonplaceholder.typicode.com/todos')
      .its('body')
      .then(() => {
        const titlePattern = /^[a-z]+\s[a-z]+/i;
        cy.get('.task-item').should(($tasks) => {
          const taskTexts = [...$tasks].map(($task) => $task.textContent.trim());
          const matchingTasks = taskTexts.filter((text) => titlePattern.test(text));
          expect(matchingTasks.length).to.be.greaterThan(0);
        });
      });
  });
});
