

// problema 10
// Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.

let input = require('readline-sync')

// Entrada
let numberToBeDivided = Number(input.question('Digite um dividendo ---> '))
let divisor = Number(input.question('Digite um divisor ---> '))

// Processamento
let operation = numberToBeDivided + '/' + divisor
let quotient = (numberToBeDivided / divisor).toFixed(2)
let divisionRemainings = (quotient - Math.floor(quotient)).toFixed(2)

//Saída
let title = '\n===== RELATÓRIO ====='
let report = `
${title}
Quociente da operação (${operation}): ${quotient}
Resto do quociente da operação (${operation}): ${divisionRemainings}
`
console.log(report)
