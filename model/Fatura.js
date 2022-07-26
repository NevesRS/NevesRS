const Cliente = require('./Cliente');
const Servico = require('./Servico');

module.exports = class Fatura { 
  constructor() {
	this.dataVencimento = "";
    this.dataEmissao = "";
	this.valorTotal = 0.0;
	this.valorIcms = 0.0;
	this.cli = new Cliente();
	this.serv = new Servico();
  }
  
  setDataVencimento(dv) {
	this.dataVencimento = dv;
  }
  
  getDataVencimento() {
	return this.dataVencimento;  
  }
  
  setDataEmissao(de) {
	this.dataEmissao = de;
  }
  
  getDataEmissao() {
	return this.dataEmissao;  
  }
  
  setValorTotal() {
	this.valorTotal = this.serv.getValorHora() * 
	                  this.serv.getTempoRealizacao();
  }
  
  getValorTotal() {
	return this.valorTotal;  
  }
  
  setValorIcms() {
	if (this.serv.getTipoServico() == 1) {
		this.valorIcms = (this.valorTotal * 15)/100;
	} else {
		if (this.serv.getTipoServico() == 2) {
			this.valorIcms = this.valorTotal * 0.12;
		} else {
			if (this.serv.getTipoServico() == 3) {
				this.valorIcms = (this.valorTotal * 23)/100;
			} else {
				this.valorIcms = this.valorTotal * 0.17;
			}
		}
	}
  }
  
  getValorIcms() {
	return this.valorIcms;  
  }
  
  getPercentualIcms() {
	if (this.serv.tipoServico == 1) {
		return 15;  
	} else {
		if (this.serv.tipoServico == 2) {
			return 12;  
		} else {
			if (this.serv.tipoServico == 3) {
				return 23;  
			} else {
				return 17;  
			}
		}
	}
  }
  
  setCli(c) {
	this.cli = c;
  }
  
  getCli() {
	return this.cli;  
  }
  
  setServ(s) {
	this.serv = s;
  }
  
  getServ() {
	return this.serv;  
  }
}