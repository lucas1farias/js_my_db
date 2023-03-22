

/*
    É um loop for com propósito p/ filtrar dados de um dado iterável array de alguma forma
    É esperado que o array criado por "map" tenha tamanho menor (pode acontecer de ser igual) que array analisado
    Possui uso similar ao do count() em Python
*/

// ----- Exemplo 1: Contar números de um array pequeno -----
let nums = [0, 0, 1]
let amountZero = nums.filter(function(i) {return i === 0})
let amountOne = nums.filter(function(i) {return i === 1})
console.log(['Quantos zeros?', amountZero.length])
console.log(['Quantos uns?', amountOne.length])

// ----- Exemplo 2: Contar votos de candidatos enquanto o array alvo recebe dados -----
let votes = []

setInterval(() => {
    let numbers = [0, 1]
    let range0To1 = Math.random() * 2
    let index = Math.floor(range0To1)
    votes.push(numbers[index])
    
    // filtragem
    let zerosCountage = votes.filter(function(i) {
        return i === 0
    })
    
    // filtragem
    let onesCountage = votes.filter(function(i) {
        return i === 1
    })

    console.log(`Zeros ${zerosCountage.length} vs ${onesCountage.length} Uns`)
}, 1000)

// ----- Exemplo 3: Filtrando produtos por sua chave -----
const products = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'Copo de Vidro', price: 12.49, fragile: true},
    {name: 'Copo de Plástico', price: 18.99, fragile: false}
]

// Ao tentar usar filter p/ pegar o nome dos produtos, não funciona, então "filter + map" foram combinados
let fragileProducts = products.filter(prod => prod.fragile).map(prod => prod.name)
console.log('[IMPERATIVO]', fragileProducts)

let resistantProducts = products.filter(prod => !prod.fragile).map(prod => prod.name)
console.log('[IMPERATIVO]', resistantProducts)

// FORMA DECLARATIVA
let byStatus = array => array.fragile
let byName = array => array.name
let fragileProductsDeclarative = products.filter(byStatus).map(byName)
console.log('[DECLARATIVO]', fragileProductsDeclarative)
