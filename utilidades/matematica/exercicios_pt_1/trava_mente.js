

// problema 7
// Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

let input = require('readline-sync')

// Entradas
let firstNum = Number(input.question('Digite o primeiro valor ---> '))
let secondNum = Number(input.question('Digite o segundo valor ---> '))
let thirdNum = Number(input.question('Digite o terceiro valor ---> '))

// Processamento
let title = '\n===== RELATÓRIO ====='
let sumTwoFirst = firstNum + secondNum
let differenceTwoLast = secondNum - thirdNum

let report = `
${title}
Soma dos 2 primeiros: ${sumTwoFirst}
Diferença dos dois últimos: ${differenceTwoLast}
`
console.log(report)
