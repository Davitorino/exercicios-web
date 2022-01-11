ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
  (nome, cnpj)
VALUES
  ('Bradesco', 86622512000105),
  ('Vale', 80527842000135),
  ('Cielo', 32714749000197);

desc empresas;
desc prefeitos;
desc cidades;
desc estados;
select * from empresas;
select * from cidades;
select * from empresas_unidades;

INSERT INTO empresas_unidades
  (empresa_id, cidade_id, sede)
VALUES
  (1, 1, 1),
  (1, 2, 0),
  (2, 1, 0),
  (2, 2, 1);