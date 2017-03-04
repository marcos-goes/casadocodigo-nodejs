class IndexController {
  constructor() {
    console.log('Instanciando IndexController')
  }

  home(req, res){
    res.render('home')
  }
}

module.exports = new IndexController
