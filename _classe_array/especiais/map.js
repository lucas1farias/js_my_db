

/*
    É um loop for com propósito p/ tratar dados de um dado iterável array de alguma forma
    É esperado que o array criado por "map" tenha o mesmo tamanho que array analisado
    Pode ser usado de forma sequencial
*/

// Alvo
let nums = [1, 2, 3]
console.log('[PARTE 1.0]', nums)

// Outro (usa o alvo)
// Objetivo? Pegar dados de "nums" e os converter em par ou ímpar
let numsClass = nums.map(function(i) {
    if (i % 2 === 0) { return 'par'} else { return 'ímpar' }
})
console.log('[PARTE 1.1]', numsClass)

// Outro (usa o alvo) (usando função padrão)
// Objetivo? Pegar dados de "nums" e os converter em formato de moeda
let currency = nums.map(function(i) {
    return `${parseFloat(i).toFixed(2).replace('.', ',')}`
})
console.log('[PARTE 1.2]', currency)

// Outro (usa o alvo) (usando função arrow)
let numsCurrencyV2 = i => `${parseFloat(i * 2).toFixed(2).replace('.', ',')}`
// Aqui temos uma função usando outra (map usando numsCurrencyV2)
let currencyDeclarative = nums.map(numsCurrencyV2)
console.log('[PARTE 1.3 DECLARATIVA]', currencyDeclarative)





let values = ['1', '2', '3']

// map que faz conversão p/ outro tipo
values = values.map(Number) 
console.log('[PARTE 2.0]', values)

// map que faz convesão p/ sua versão raiz quadrada (sintaxe não reduzida)
values = values.map(i => i ** 2) 
console.log('[PARTE 2.1]', values)

let studentsGrades = ['7.2', '6.9', '8.8']
let toNumber = i => +i
let doSum = (iZero, iNext) => iZero + iNext
let toFloat = value => +parseFloat(value).toFixed(2)
let studentsGradeSum = studentsGrades.map(toNumber).reduce(doSum)
console.log('[PARTE 2.2]', studentsGradeSum, toFloat(studentsGradeSum))

// Exercício: mapear somente os preços das strings
const shoppingKart = [
    '{"name": "Borracha", "preco": 3.45}',
    '{"name": "Caderno", "preco": 13.90}',
    '{"name": "Kit de Lápis", "preco": 41.22}',
    '{"name": "Caneta", "preco": 7.58}',
]

// Forma 1
let getPricesWayOne = shoppingKart.map(function(i) {
    let stringToObject = JSON.parse(i)
    return +stringToObject.preco
})

// Forma 2
let getPricesWayTwo = shoppingKart.map(function(i) {
    let priceElement = i.split(',')[1].replaceAll('"', '')
    .replace(':', '').replace('}', '').replace('preco', '')
    .replace('  ', '')
    return +priceElement
})

// Forma 3 (+ avançada)
const stringToObject = json => JSON.parse(json)
const getKeyPrice = objectKey => objectKey.preco
let getPricesWayThree = shoppingKart.map(stringToObject).map(getKeyPrice)

console.log('[PARTE 2.3]', getPricesWayOne)
console.log('[PARTE 2.4]', getPricesWayTwo)
console.log('[PARTE 2.5]', getPricesWayThree)
