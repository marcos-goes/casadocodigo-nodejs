const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../dao/ProdutoDao')

class ProdutoController {

  constructor() {
    console.log('Instanciando ProdutoController')
  }

  buscaPorId(req, res) {
    let idProduto = req.params.idProduto
    console.log('Recebeu requisicao /produtos/' + idProduto)

    //req.assert('req.params.idProduto', 'Id do produto deve ser um número.').isInt()
    //var errors = req.validationErrors()
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)

    produtoDao.buscaPorId(idProduto, (error, result, fields) =>{
      res.format({
        html: () => {
          res.render('produtos/form', {livros : result})
        },
        json: () => {
          res.json(result)
        }
      })
    })

    connection.end()
    //res.send(idProduto)
  }

  listaTodos(req, res) {
    console.log('Recebeu requisicao /produtos .')
    //res.send('<h1>Lista de Produtos</h1>')

    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)
    let salvo = req.query.salvo

    produtoDao.listaTodos((error, result, fields) =>{
      res.format({
        html: () => {
          res.render('produtos/lista', {livros : result, salvo : salvo})
        },
        json: () => {
          res.json(result)
        }
      })
    })
    connection.end()
  }

  salva(req, res) {
    let livro = req.body

    req.assert('titulo', 'Título deve ser preenchido.').notEmpty()
    req.assert('preco', 'Preço deve ser um número.').isFloat()
    var errors = req.validationErrors()

    if(errors){
      console.log("Erros na validaçao do formulário de Produto")
      res.format({
        html: function(){
          res.status(400).render("produtos/form", {validationErrors: errors})
        },
        json: function(){
          res.status(400).send(errors)
        }
      })
      return
    }

    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)

    produtoDao.salva(livro, (error, result, fields) => {
      //res.render('produtos/salvo')
      res.redirect('/produtos?salvo=true')
    })
  }

  form(req, res) {
    res.render('produtos/form')
  }

}

module.exports = new ProdutoController
