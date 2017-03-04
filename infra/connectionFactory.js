let mysql = require('mysql')

function connectionFactory(host, port, user, password, database){

  if(process.env.NODE_ENV){
    database = process.env.NODE_ENV
  }

  return mysql.createConnection({
    host: host || '0.0.0.0',
    port: port || '3307',
    user: user || 'root',
    password: password || '',
    database: database || 'casadocodigo'
  })
}

module.exports = connectionFactory
