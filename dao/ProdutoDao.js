/* // ECMA 5
function ProdutoDao(connection){
  this._connection = connection
}

ProdutoDao.prototype.listaTodos = function(callback){
  this._connection.query('SELECT * FROM livros', callback)
}
*/

class ProdutoDao {

  constructor(connection){
    this._connection = connection
  }

  listaTodos(callback){
    this._connection.query('SELECT * FROM livros', callback)
  }

  buscaPorId(id, callback){
    this._connection.query('SELECT * FROM livros WHERE id = ' + id, callback)
  }

  salva(livro, callback){
    this._connection.query('INSERT INTO livros SET ?', livro, callback)
  }

}

module.exports = ProdutoDao
