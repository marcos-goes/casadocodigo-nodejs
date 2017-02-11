let app = require('./custom-express')()
let port = 3000

app.listen(port, () => {
  console.log('Servidor iniciado na porta ' + port)
  console.log('CTRL + C para desligar o servidor ' + port)
})
