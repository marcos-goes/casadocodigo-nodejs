const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

//function customExpress(){
  //let app = express()

  const app = express()

  app.set('view engine', 'ejs')
  app.use(express.static('./public'))
  app.use(bodyParser.urlencoded({extended : false}))
  app.use(bodyParser.json())
  app.use(expressValidator())

  require('./routes/routes')(app)

//  return app
//}

//module.exports = customExpress

module.exports = app
