

// problema 31
// Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

const input = require('readline-sync')

// Entrada
const binary = input.question('Digite um valor bin de 4 caracteres ---> ')

// Processamento
const index1 = binary[3] * Math.pow(2, 0) 
const index2 = binary[2] * Math.pow(2, 1) 
const index3 = binary[1] * Math.pow(2, 2) 
const index4 = binary[0] * Math.pow(2, 3)
const decimal = index1 + index2 + index3 + index4

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + 'Binário: ' + binary + '\nDecimal: ' + decimal + '\n'

console.log(report)
