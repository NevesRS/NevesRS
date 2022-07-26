module.exports = class Cliente { 
  constructor() {
	this.cpf = "";
    this.nome = "";
	this.endereco = "";
	this.telefone = "";
  }
  
  setCpf(c) {
	this.cpf = c;
  }
  
  getCpf() {
	return this.cpf;  
  }
  
  setNome(n) {
	this.nome = n;
  }
  
  getNome() {
	return this.nome;  
  }
  
  setEndereco(e) {
	this.endereco = e;
  }
  
  getEndereco() {
	return this.endereco;  
  }
  
  setTelefone(t) {
	this.telefone = t;
  }
  
  getTelefone() {
	return this.telefone;  
  }
  
  inserir(connection) {
	  
    var sql = "INSERT INTO clientes (cpf,nome,telefone,endereco) VALUES(?, ?, ?, ?)";

    connection.query(sql, [this.cpf, this.nome, this.telefone, this.endereco], function (err, result) {
      if (err) throw err;
      });
  }
  
}