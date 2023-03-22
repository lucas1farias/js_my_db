

// problema 4
// 4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

let input = require('readline-sync')

// Entrada
let dollarAmount = Number(input.question('Digite um valor em dolar (ex: 7, 4.5) ---> '))

// Processamento
let dollarToReal = 5.49
let conversion = (dollarAmount * dollarToReal).toFixed(2)

// Saída
let representation = '$$' + dollarAmount + ' = ' + conversion + '\n'
let report = '\n===== RELATÓRIO: DÓLAR PARA REAL =====\n' + representation
console.log(report)
