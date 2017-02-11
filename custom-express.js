let express = require('express')

function customExpress(){
  let app = express()
  app.set('view engine', 'ejs')

  require('./routes/produto')(app)

  return app
}

module.exports = customExpress
