

// problema 9
// Leia 2 números (A, B) e escreva-os em ordem inversa (B, A)

let input = require('readline-sync')

// Entrada
let firstNum = Number(input.question('Digite um valor ---> '))
let secondNum = Number(input.question('Digite outro valor ---> '))

// Processamento
let number = firstNum + '' + secondNum
let numberReversed = secondNum + '' + firstNum

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Inversão dos números ' + number + ': ' + numberReversed + '\n'
console.log(report)

// if (number % 1 != 0 | numberReversed % 1 != 0) {
//   console.log('Números não inteiros não são permitidos')
// } else {
//   // Saída
//   let title = '\n===== RELATÓRIO =====\n'
//   let report = title + 'Inversão dos números ' + number + ': ' + numberReversed + '\n'
//   console.log(report)
// }
