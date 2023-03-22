

// problema 8
// Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

let input = require('readline-sync')

// Entradas
let firstNum = Number(input.question('Digite um número (ex: 2, 4.4) ---> '))
let secondNum = Number(input.question('Digite um outro número (ex: 2, 4.4) ---> '))

// Processamento
let sum = firstNum + secondNum
let subtraction = firstNum - secondNum
let division = (sum / subtraction).toFixed(2)

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Divisão da soma pela subtração: ' + division + '\n'

console.log(report)
