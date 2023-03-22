

// problema 2
// Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

let input = require('readline-sync')

// Entradas
let hour = Number(input.question('Digite um valor em horas (ex: 1, 12, 24) ---> '))
let minute = Number(input.question('Digite um valor em minutos (ex: 1, 12, 24) ---> '))

// Processamento
let hourToMinute = 60
let calculus = (hour * hourToMinute) + minute

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Quanto é ' + hour + ' hora(s)' + ' + ' + minute + ' minutos' + '? ' + calculus + ' minutos\n'
console.log(report)
