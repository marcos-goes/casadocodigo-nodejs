let mysql = require('mysql')

function connectionFactory(){
  return mysql.createConnection({
    host: '0.0.0.0',
    port: '3307',
    user: 'root',
    password: '',
    database: 'casadocodigo'
  })
}

module.exports = connectionFactory
