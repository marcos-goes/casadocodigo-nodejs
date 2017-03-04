const ProdutoController = require('../controller/ProdutoController')
const PromocoesController = require('../controller/PromocoesController')
const IndexController = require('../controller/IndexController')

function routes (app) {
  app.get('/', IndexController.home)

  app.get('/produtos', ProdutoController.listaTodos)
  app.post('/produtos', ProdutoController.salva)
  app.get('/produtos/form', ProdutoController.form)
  app.get('/produtos/:idProduto', ProdutoController.buscaPorId)

  app.get('/promocoes/form', PromocoesController.form)
  //app.post('/promocoes', PromocoesController.dispara)
  app.post('/promocoes', (req, res) => {
    PromocoesController.dispara(req, res, app)
  })

}

module.exports = routes
