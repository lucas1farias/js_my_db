

// problema 18
// Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)


// RAIO        || distância do centro do círculo até uma de suas extremidades
// DIÂMETRO    || Dobro do valor do RAIO 
// COMPRIMENTO || Tamanho da medida da volta dada ao redor do círculo (também chamado de PERÍMETRO)
// PI          || Valor usado na fórmula do cálculo da área do círculo

let input = require('readline-sync')

// Entrada
let radius = Number(input.question('Digite o valor do raio ---> '))

// Processamento
// FÓRMULA: [pi = C/D]  Tecnicamente, pi sempre será multiplicado com D (onde D é o dobro de R)
let pi = 3.14
let lengthCalculus = pi * (radius * 2) 
let areaCalculus = pi * (radius * radius)

// Saída
let report = `
===== RELATÓRIO: cálculos da circunferência =====
Comprimento || ${lengthCalculus}
Área        || ${areaCalculus}
`
console.log(report)
