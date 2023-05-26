

/*
Faça um programa que leia 6 valores. 
Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). 
A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.

Exemplo de Entrada	Exemplo de Saída
7                   4 valores positivos
-5
6
-3.4
4.6
12
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const va = entrada(lines, 'float')
  const vb = entrada(lines, 'float')
  const vc = entrada(lines, 'float')
  const vd = entrada(lines, 'float')
  const ve = entrada(lines, 'float')
  const vf = entrada(lines, 'float')
  
  const num_positivos = obter_nums_positivos([va, vb, vc, vd, ve, vf])
  const saida = `${num_positivos} valores positivos`
  exibir(saida)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function entrada(fonte, tipo) {
  if (tipo == 'str') {
    return fonte.shift().trim()
  } else if (tipo == 'int') {
    return parseInt(fonte.shift())
  } else if (tipo == 'float') {
    return parseFloat(fonte.shift())
  } 
}

function eh_positivo(n) {
  return n > 0
}

function obter_nums_positivos(colecao) {
  let positivos = []
  for (let i = 0; i < colecao.length; i++) {
    eh_positivo(colecao[i]) ? positivos.push(colecao[i]) : null
  }
  return positivos.length
}

main()
