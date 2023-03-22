

// Converte um objeto string JS em sua versão objeto

const shoppingKart = [
  '{"name": "Borracha", "preco": 3.45}',
  '{"name": "Caderno", "preco": 13.90}',
  '{"name": "Kit de Lápis", "preco": 41.22}',
  '{"name": "Caneta", "preco": 7.58}',
]

let objectString = shoppingKart[0]
console.log('[ANTES]', objectString)
let object = JSON.parse(shoppingKart[0])
console.log('[DEPOIS]', object)
