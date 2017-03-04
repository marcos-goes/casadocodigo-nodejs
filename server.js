const app = require('./custom-express')//()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3000

app.set('io', io)

let server = http.listen(port, () => {

  let host = server.address().address
  let port = server.address().port

  console.log('Servidor iniciado localhost:' + port)
  console.log('CTRL + C para desligar o servidor ')
})

/*
app.listen(port, () => {
  console.log('Servidor iniciado na porta ' + port)
  console.log('CTRL + C para desligar o servidor ')
})
*/
