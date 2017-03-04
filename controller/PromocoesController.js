const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../dao/ProdutoDao')

class PromocoesController {

  constructor() {
    console.log('Instanciando PromocoesController')
  }

  form(req, res){
    let connection = connectionFactory()
    let produtoDao = new ProdutoDao(connection)

    produtoDao.listaTodos((error, result, fields) => {
      res.render('promocoes/form', {livros: result})
    })
  }

  dispara(req, res, app) {
    let promocao = req.body
    app.get('io').emit('novaPromocao', promocao)

    res.redirect('/promocoes/form')
  }

}

module.exports = new PromocoesController()
