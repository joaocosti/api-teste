Cypress.Commands.add('requisicaoMetodoGet', (id = '') => {
  cy
    .request({
      method: 'GET',
      url: Cypress.env('baseUrl') + id,
      failOnStatusCode: false,
    });
});
