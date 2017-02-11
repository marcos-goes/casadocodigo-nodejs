function routesProduto (app) {
  app.get('/produtos', (req, res) => {
    console.log('Recebeu requisicao /produtos .')
    //res.send('<h1>Lista de Produtos</h1>')
    res.render('produtos/lista')
  })

  app.get('/products', (req, res) => {
    res.redirect('/produtos')
  })
}

module.exports = routesProduto
