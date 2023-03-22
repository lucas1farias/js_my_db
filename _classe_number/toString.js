

// SINTAXE: toString(int_ou_float)
// Converte número p/ sua versão string (inteiro ou flutuante)
// Uma var instanciada sem a função, não pode usá-la depois
// É preciso uma var secundária para receber a modificação

// Com 1 dados
let number = 1
console.log('===== PARTE 1 =====')
console.log(typeof number, number)

let numberStr = number.toString()
console.log('===== PARTE 2 =====')
console.log(typeof numberStr, numberStr)

// Com vários dados
let values = [1, 1.1, 1.11, 1.111]
let valuesStr = []

values.forEach(index => {
  valuesStr.push(index.toString())
})

console.log('===== PARTE 3 =====')
valuesStr.forEach(index => {
  // console.log(typeof index, index)
})
