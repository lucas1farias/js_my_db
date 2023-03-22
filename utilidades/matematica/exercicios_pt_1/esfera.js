

// problema 19
// Leia o valor do raio de uma esfera, calcule e escreva seu volume. 
// (v = (4 * p * r3) / 3) (p = 3,14)

let input = require('readline-sync')

// Entrada
let radius = Number(input.question('Digite o valor do raio de uma esfera ---> '))

// Processamento
let pi = 3.14
let formula = 4 * pi * (radius ** 3) / 3

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Volume da esfera: ' + formula.toFixed(2) + '\n'
console.log(report)
