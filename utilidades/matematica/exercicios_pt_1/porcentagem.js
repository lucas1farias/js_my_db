

// problema 13
// Leia um valor em real (R$), calcule e escreva 70% deste valor. 

let input = require('readline-sync')

// Entradas
let value = Number(input.question('Digite um valor de dinheiro ---> '))
let percentage = Number(input.question('Digite a porcentagem do valor a ser calculada ---> '))

// Processamento
let percentageCalculus = (percentage / 100).toFixed(2)
let calculus = (value * percentageCalculus).toFixed(2)

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + percentage + '% de ' + '(R$ ' + value + '): ' + calculus + '\n'

console.log(report)
