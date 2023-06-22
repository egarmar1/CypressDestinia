Cypress.Commands.add('dragAndDrop', (subject, target) => {
    cy.wrap(subject).trigger('mousedown', { which: 1 });
    cy.wrap(target).trigger('mousemove', { clientX: 4, clientY: 0 }).trigger('mouseup', { force: true });
  });