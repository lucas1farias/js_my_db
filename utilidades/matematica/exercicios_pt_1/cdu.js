

// problema 5
// Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

let input = require('readline-sync')

// Entrada
let value = Number(input.question('Digite um valor entre 100 a 999 ---> '))

// Processamento
let hundred = Math.floor(value / 100)
let hundredRemainings = value % 100
let ten = Math.floor(hundredRemainings / 10)
let unit = hundredRemainings % 10

// Saída
let SumOfElements = hundred + ten + unit
let report = `
===== RELATÓRIO =====
Centena || ${hundred}
Dezena  || ${ten}
Unidade || ${unit}
Soma    || ${SumOfElements}
`
console.log(report)
