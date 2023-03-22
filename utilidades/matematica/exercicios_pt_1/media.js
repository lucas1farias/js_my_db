

// problema 14
// Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

let input = require('readline-sync')

// Entradas
let firstGrade = Number(input.question('Digite a nota 1 ---> '))
let secondGrade = Number(input.question('Digite a nota 2 ---> '))
let thirdGrade = Number(input.question('Digite a nota 3 ---> '))

let firstWeight = Number(input.question('Digite o peso da nota 1 ---> '))
let secondWeight = Number(input.question('Digite o peso da nota 2 ---> '))
let thirdWeight = Number(input.question('Digite o peso da nota 3 ---> '))

// Processamento
let gradesAndWeights = (firstGrade * firstWeight) + (secondGrade * secondWeight) + (thirdGrade * thirdWeight)
let allWeightsSum = firstWeight + secondWeight + thirdWeight
let mean = (gradesAndWeights / allWeightsSum).toFixed(2)

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Média ponderada das 3 notas: ' + mean + '\n'
console.log(report)
