module.exports = class Servico { 
  constructor() {
	this.descricao = "";
    this.tipoServico = 0;
	this.tempoRealizacao = 0;
	this.dataRealizacao = "";
	this.valorHora = 0.0;
  }
  
  setDescricao(d) {
	this.descricao = d;
  }
  
  getDescricao() {
	return this.descricao;  
  }
  
  setTipoServico(ts) {
	this.tipoServico = ts;
  }
  
  getTipoServico() {
	if (this.tipoServico == 1) {
		return 'Instalação de Telefone/Internet';  
	} else {
		if (this.tipoServico == 2) {
			return 'Manutenção de Linha Telefônica/Internet';  
		} else {
			if (this.tipoServico == 3) {
				return 'Troca de Equipamentos (modem)';  
			} else {
				return 'Suporte Técnico';  
			}
		}
	}
  }
  
  setTempoRealizacao(tr) {
	this.tempoRealizacao = tr;
  }
  
  getTempoRealizacao() {
	return this.tempoRealizacao;  
  }
  
  setDataRealizacao(dr) {
	this.dataRealizacao = dr;
  }
  
  getDataRealizacao() {
	return this.dataRealizacao;  
  }
  
  setValorHora(vr) {
	this.valorHora = vr;
  }
  
  getValorHora() {
	return this.valorHora;  
  }

  inserir(connection) {
    var sql = "INSERT INTO clientes (descricao,tipoServico,tempoRealizacao,dataRealizacao,valorHora) VALUES(?, ?, ?, ?)";

    connection.query(sql, [this.descricao, this.tipoServico, this.tempoRealizacao, this.dataRealizacao, this.valorHora], function (err, result) {
      if (err) throw err;
      });
  }
  
}