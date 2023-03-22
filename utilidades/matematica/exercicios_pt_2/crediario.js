

/*
===== PROBLEMA 46 =====
Uma loja vende seus produtos no sistema entrada mais duas 
prestações, sendo a entrada maior ou igual a cada uma das duas 
prestações; estas devem ser iguais, inteiras e as maiores possíveis. 
Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as 
duas prestações são iguais a R$ 90,00; se o valor da mercadoria for 
R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a
R$ 100,00. Escreva um algoritmo que receba o valor da mercadoria e 
forneça o valor da entrada e das duas prestações, de acordo com as 
regras acima.
*/

const input = require('readline-sync')

// Entrada
const productPrice = Number(input.question('Digite um valor de um produto ---> '))

// Processamento
const advanceMoney = Math.floor((productPrice / 3) + (productPrice % 3))
const parcel1st = Math.floor(productPrice / 3)
const parcel2nd = Math.floor(productPrice / 3)

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Preço do produto   || R$ ${productPrice}
Preço da entrada   || R$ ${advanceMoney}
Preço da parcela 1 || R$ ${parcel1st}
Preço da parcela 2 || R$ ${parcel2nd}
`
console.log(report)
