

// problema 22
// Leia um valor em km, calcule e escreva o equivalente em m

let input = require('readline-sync')

// Entrada
let kmValue = Number(input.question('Digite um valor em (km) (ex: 14, 26.7) ---> '))

// Processamento
let conversion = 1000
let calculus = kmValue * conversion

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + '(' + kmValue + ' km) é o equivalente a: ' + calculus + 'm\n'

console.log(report)
