

/*
Faça um programa que leia 5 valores inteiros. 
Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.

7
-5
6
-4
12

3 valores pares
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const v1 = entrada(lines, 'int')
  const v2 = entrada(lines, 'int')
  const v3 = entrada(lines, 'int')
  const v4 = entrada(lines, 'int')
  const v5 = entrada(lines, 'int')

  const n_pares = obter_classe([v1, v2, v3, v4, v5])
  const saida = `${n_pares} valores pares`
  
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

function eh_par(num) {
  return num % 2 === 0
}

function eh_positivo(num) {
  return num > 0
}

function obter_classe(colecao) {
  let resultados = []
  
  for(let i = 0; i < colecao.length; i++) {
    if (eh_positivo(colecao[i]) && eh_par(colecao[i])) {
      resultados.push(colecao[i])
    } 
    else {
      // Como só se quer saber se é par, não precisa perguntar se é positivo, pois existem pares negativos
      if (eh_par(colecao[i])) {
        resultados.push(colecao[i])
      }
    }
  }

  return resultados.length
}

main()
