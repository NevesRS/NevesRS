const express = require('express');
const app = express();                 /* npm i --s ejs */

app.use(express.static(__dirname + '/views'));

app.listen(3000, function(){
  console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const Fatura = require('./model/Fatura');
const Cliente = require('./model/Cliente');
const Servico = require('./model/Servico');

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "200.17.84.52",
  user: "gleison",
  password: "12345678",
  database: "tabajara"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Banco de dados conectado!");
});


app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/clientes', function(req, res){
	res.sendFile(__dirname + '/views/cliente/form.html');
});

app.get('/servicos', function(req,res){
	res.sendFile(__dirname + '/views/servico/form.html');
});

app.post('/salvarCliente', function(req, res){
	var c = new Cliente();
	
	c.setCpf(req.body.cpf);
	c.setNome(req.body.nome);
	c.setTelefone(req.body.telefone);
	c.setEndereco(req.body.endereco);
	
	var retorno = c.inserir(con);
	
	res.render('cliente/resultado.ejs', {param: c});
});

app.post('/salvarServico', function(req,res){
	var s = new Servico();

	s.setDescricao(req.body.desc);
	s.setTipoServico(req.body.serv);
	s.setTempoRealizacao(req.body.tempoRealizacao);
	s.setDataRealizacao(req.body.dataRealizacao);
	s.setValorHora(req.body.valorHora);

	var retorno = c.inserir(con);

	res.render('servico/resultado.ejs', {param: s});
})

/* Vamos deixar para mais tarde!!!! */

app.post('/imprimir', function(req, res){
	var fat = new Fatura();
	
	fat.getCli().setCpf(req.body.cpf);
	fat.getCli().setNome(req.body.nome);
	fat.getCli().setTelefone(req.body.telefone);
	fat.getCli().setEndereco(req.body.endereco);
	
	fat.getServ().setDescricao(req.body.descricao_servico);
	fat.getServ().setDataRealizacao(req.body.data_realizacao);
	fat.getServ().setTipoServico(req.body.tipo);
	fat.getServ().setTempoRealizacao(req.body.tempo);
	fat.getServ().setValorHora(req.body.valor_unitario);
	
	fat.setDataEmissao(req.body.data_emissao);
	fat.setDataVencimento(req.body.data_vencimento);
	
	fat.setValorTotal();
	
	fat.setValorIcms();
	
	res.render('resultado.ejs', {param: fat});
});