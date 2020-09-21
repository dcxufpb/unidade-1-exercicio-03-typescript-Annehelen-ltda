const cupom = require('./cupom');

test('Loja Completa', () => {
  expect(cupom.imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Nome vazio', () => {
  cupom.dados.nome_loja = "";
  expect(cupom.imprime_dados_loja()).toBe(`O campo nome da loja é obrigatório`);
  cupom.dados.nome_loja = "Arcos Dourados Com. de Alimentos LTDA";
});

test('Logradouro vazio', () => {
  cupom.dados.logradouro = "";
  expect(cupom.imprime_dados_loja()).toBe(`O campo logradouro do endereço é obrigatório`);
  cupom.dados.logradouro = "Av. Projetada Leste";
});

test('Número zero', () => {
  cupom.dados.numero = 0;
  expect(cupom.imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, s/n EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
  cupom.dados.numero = 500;
});

test('Município vazio', () => {
  cupom.dados.municipio = "";
  expect(cupom.imprime_dados_loja()).toBe(`O campo município do endereço é obrigatório`);
  cupom.dados.municipio = "Campinas";
});

test('Estado vazio', () => {
  cupom.dados.estado = "";
  expect(cupom.imprime_dados_loja()).toBe(`O campo estado do endereço é obrigatório`);
  cupom.dados.estado = "SP";
});

test('CNPJ vazio', () => {
  cupom.dados.cnpj = "";
  expect(cupom.imprime_dados_loja()).toBe(`O campo CNPJ da loja é obrigatório`);
  cupom.dados.cnpj = "42.591.651/0797-34";
});

test('Inscrição estadual vazia', () => {
  cupom.dados.inscricao_estadual = "";
  expect(cupom.imprime_dados_loja()).toBe(`O campo inscrição estadual da loja é obrigatório`);
  cupom.dados.inscricao_estadual = "244.898.500.113";
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "Smelly Cat";
  cupom.dados.logradouro = "Rua Etheria";
  cupom.dados.numero = 205;
  cupom.dados.complemento = "Perto da velhinha que mora em uma caverna";
  cupom.dados.bairro = "Br. Templo do Cristal";
  cupom.dados.municipio = "Beach City";
  cupom.dados.estado = "BC";
  cupom.dados.cep = "78051-604";
  cupom.dados.telefone = "(66)4002-8922";
  cupom.dados.observacao = "Por Favor ignorar os exército Intergalácticos em guerra tentando dominar o planeta";
  cupom.dados.cnpj = "53.409.609/0001-85";
  cupom.dados.inscricao_estadual = "512.670.302.653";
  
  let expected = "Smelly Cat\n";
  expected += "Rua Etheria, 205 Perto da velhinha que mora em uma caverna\n";
  expected += "Br. Templo do Cristal - Beach City - BC\n";
  expected += "CEP:78051-604 Tel (66)4002-8922\n";
  expected += "Por Favor ignorar os exército Intergalácticos em guerra tentando dominar o planeta\n";
  expected +="CNPJ: 53.409.609/0001-85\n";
  expected += "IE: 512.670.302.653\n";

  //E atualize o texto esperado abaixo
  expect(cupom.imprime_dados_loja()).toBe(expected);
});
