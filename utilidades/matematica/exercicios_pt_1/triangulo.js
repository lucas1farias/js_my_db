

// problema 15
// Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

let input = require('readline-sync')

// Entradas
let triangleBase = Number(input.question('Digite a base do triângulo ---> '))
let triangleHeight = Number(input.question('Digite a altura do triângulo ---> '))

// Processamento
let formula = ((triangleBase * triangleHeight) / 2).toFixed(2)

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Área do triângulo de base ' + triangleBase + ' e altura ' + triangleHeight + ': ' + formula + '\n'

console.log(report)
