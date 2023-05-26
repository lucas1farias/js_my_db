

/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses
e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363
ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.

Exemplo de Entrada	Exemplo de Saída
400                 1 ano(s) 1 mes(es) 5 dia(s)
*/

import { question } from "readline-sync"

var lines = question().split('\n') 

function main() {
  let entrada = lines[0].split(' ')
  const idade = entrada[0]
  const ano = 365
  const mes = 30
  const dia = 1
  const anos_de_idade = modulacao(idade, ano, 'divisão')
  const anos_de_idade_resto = modulacao(idade, ano, 'modular')
  const meses_de_idade = modulacao(anos_de_idade_resto, mes, 'divisão')
  const meses_de_idade_resto = modulacao(anos_de_idade_resto, mes, 'modular')
  const dias_de_idade = modulacao(meses_de_idade_resto, dia, 'divisão')
  const contexto = `${anos_de_idade} ano(s)\n${meses_de_idade} mes(es)\n${dias_de_idade} dia(s)`
  exibir(contexto)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function modulacao(valor, modular, operacao) {
  if (operacao == 'divisão') {
    return Math.floor(valor / modular)
  } else {
    return valor % modular
  }
  
}

main()
