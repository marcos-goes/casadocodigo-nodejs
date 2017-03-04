//const mocha = require('mocha')
const connectionFactory = require('../infra/connectionFactory')
const express = require('../custom-express')()
const request = require('supertest')(express)

describe('#ProdutoController', () => {

  before((done) => {
    let conn =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           connectionFactory()
    conn.query('DELETE FROM livros', (ex, result) =>{
      if(!ex){
        done()
      }
    })
  })

  it('listagem de produtos em formato JSON', (done) => {
    request.get('/produtos')
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(200, done)
  })

  it('listagem de produtos em formato HTML', (done) => {
    request.get('/produtos')
           .set('Accept', 'text/html')
           .expect('Content-Type', /html/)
           .expect(200, done)
  })

  it('cadastro de um novo produto', (done) => {
    request.post('/produtos')
           .send({'titulo':'Livro de Teste',
                  'preco': 50.32,
                  'descricao':'Livro criado pelo fluxo de testes automatizados - MOCHA'})
           //.set('Accept', 'text/html')
           //.expect('Content-Type', /html/)
           .expect(302, done)
  })

})
