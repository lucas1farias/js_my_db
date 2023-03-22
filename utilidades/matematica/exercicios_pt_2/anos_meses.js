

// problema
// 29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

const input = require('readline-sync')

// Entrada
// let monthValue = 14
const monthValue = Number(input.question('Digite um valor correspondente a meses ---> '))

// Processamento
const yearMonths = 12 
const year = Math.floor(monthValue / yearMonths)
const months = Math.floor(monthValue % yearMonths)

// Saída
const title = '===== RELATÓRIO ====='
const report = `
${title}
Qtd. de meses  || ${monthValue}
Quantos anos   || ${year}
Quantos meses  || ${months}
`
console.log(report)
