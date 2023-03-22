

// problema 16
// Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

let input = require('readline-sync')

// Entrada
let squareSideSize = Number(input.question('Digite o tamanho do lado do quadrado ---> '))

// Processamento
let calculus = (squareSideSize * squareSideSize).toFixed(2)

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Área do quadrado: ' + calculus + '\n'

console.log(report)
