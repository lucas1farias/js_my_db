

// problema 17
// Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

let input = require('readline-sync')

// Entradas
let rectangleBase = Number(input.question('Digite o valor da base do retângulo ---> '))
let rectangleHeight = Number(input.question('Digite o valor da altura do retângulo ---> '))

// Processamento
let calculus = rectangleBase * rectangleHeight

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Área do retângulo: ' + calculus + '\n'

console.log(report)
