create database tabajara;
use tabajara;
create table clientes (
   cpf varchar(11),
   nome varchar(100),
   telefone varchar(13),
   endereco text,
   primary key(cpf)
);
create table servicos (
    id int auto_increment,
    descricao varchar(200),
    tipo_servico int,
	tempo_realizacao int,
	data_realizacao date,
	valor_hora float,
    primary key (id)
);
CREATE USER 'gleison'@'localhost' IDENTIFIED
WITH mysql_native_password BY '12345678';

GRANT ALL PRIVILEGES ON *.* TO
'gleison'@'localhost';

FLUSH PRIVILEGES;