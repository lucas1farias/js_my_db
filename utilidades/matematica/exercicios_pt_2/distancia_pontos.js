

/*
===== PROBLEMA 42 =====
  Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
  ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
*/

let input = require('readline-sync')

// Entrada
let x1 = Number(input.question('Digite o vetor x1 ---> '))
let y1 = Number(input.question('Digite o vetor y1 ---> '))
let x2 = Number(input.question('Digite o vetor x2 ---> '))
let y2 = Number(input.question('Digite o vetor y2 ---> '))

// Processamento
let firstPart = (x2 - x1) ** 2
let secondPart = (y2 - y1) ** 2
let distance = (Math.sqrt(firstPart + secondPart).toFixed(2))

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Distância dos pontos: ' + distance + '\n'

console.log(report)
