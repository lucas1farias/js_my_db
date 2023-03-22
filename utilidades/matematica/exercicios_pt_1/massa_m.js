

// problema 23
// Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama)

let input = require('readline-sync')

// Entrada
let kgValue = Number(input.question('Digite um valor em (kg) (ex: 14, 26.7) ---> '))

// Processamento
let conversion = 1000
let calculus = kgValue * conversion

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + '(' + kgValue + 'kg) é o equivalente a: ' + calculus + 'g\n'
console.log(report)
