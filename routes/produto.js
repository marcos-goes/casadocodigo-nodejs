const connectionFactory = require('../infra/connectionFactory.js')
const ProdutoDao = require('../dao/ProdutoDao.js')

function routesProduto (app) {
  app.get('/produtos', (req, res) => {
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
  })

  app.post('/produtos', (req, res) => {
    let livro = req.body

    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)

    produtoDao.salva(livro, (error, result, fields) => {
      //res.render('produtos/salvo')
      res.redirect('/produtos?salvo=true')
    })
  })

  app.get('/produtos/form', (req, res) =>{
    res.render('produtos/form')
  })
}

module.exports = routesProduto
