let express = require('express')
let bodyParser = require('body-parser')

function customExpress(){
  let app = express()

  app.set('view engine', 'ejs')
  app.use(express.static('./public'))
  app.use(bodyParser.urlencoded({extended : false}))

  require('./routes/produto')(app)

  return app
}

module.exports = customExpress
