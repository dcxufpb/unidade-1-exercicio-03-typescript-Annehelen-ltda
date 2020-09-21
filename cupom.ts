let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function imprime_dados_loja() {
  // Implemente aqui
  if(dados.nome_loja == ""){
    return (`O campo nome da loja é obrigatório`)
  }
  if(dados.logradouro == ""){
    return (`O campo logradouro do endereço é obrigatório`)
  }
  let num = dados.numero + ""
  if(dados.numero == 0){
    num = "s/n";
  }
  if(dados.municipio == ""){
    return (`O campo município do endereço é obrigatório`)
  }
  if(dados.estado == ""){
    return (`O campo estado do endereço é obrigatório`)
  }
  if(dados.cnpj == ""){
    return (`O campo CNPJ da loja é obrigatório`)
  }
  if(dados.inscricao_estadual == ""){
    return (`O campo inscrição estadual da loja é obrigatório`)
  }
  let output = `${dados.nome_loja}\n`;
  output += `${dados.logradouro}, ${num} ${dados.complemento}\n`;
  output += `${dados.bairro} - ${dados.municipio} - ${dados.estado}\n`;
  output += `CEP:${dados.cep} Tel ${dados.telefone}\n`;
  output += `${dados.observacao}\n`;
  output += `CNPJ: ${dados.cnpj}\n`;
  output += `IE: ${dados.inscricao_estadual}\n`;
  return output;
}

module.exports = {
  dados: dados,
  imprime_dados_loja:  imprime_dados_loja
};
