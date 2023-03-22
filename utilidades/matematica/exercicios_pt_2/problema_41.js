

// problema 41
/*
    O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
    distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
    seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
    escreva o custo ao consumidor.
*/

let input = require('readline-sync')

// Entrada
let value = 0
// let value = Number(input.question('Digite ---> '))

// Processamento
let factoryCost = 16000
let taxes = 45 / 100
let percentage = 28 / 100
let distributorPercentage = factoryCost * percentage
let unnamed = factoryCost * taxes
let vehicleCost = factoryCost + distributorPercentage + unnamed

console.log(vehicleCost)

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title

console.log(report)
