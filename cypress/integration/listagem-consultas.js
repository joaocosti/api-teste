/// <reference types="cypress" />

describe('Listagem dos recursos', () => {
  it('Listar todos recursos', () => {
    cy.requisicaoMetodoGet().then((resposta) => {
      expect(resposta.status).to.be.equal(200);
    });
  });
});

describe('Consultas de recursos na api ', () => {
  it('Consultar recurso válido', () => {
    const respostaEsperada = {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehen'
      + 'derit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };
    cy.requisicaoMetodoGet(respostaEsperada.id).then((resposta) => {
      expect(resposta.status).to.be.equal(200);
      expect(resposta.body).to.deep.equal(respostaEsperada);
    });
  });
  it('Consultar recurso inexistente', () => {
    const ID_INEXSITENTE = 200000;
    cy.requisicaoMetodoGet(ID_INEXSITENTE).then((resposta) => {
      expect(resposta.status).to.be.equal(404);
      /* eslint-disable no-unused-expressions */
      expect(resposta.body).to.be.empty;
    });
  });
});
