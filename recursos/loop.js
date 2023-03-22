

let vowels = ['a', 'e', 'i', 'o', 'u']

// Comum
for(let index of vowels) {
  console.log('PARTE 1:', index)
}
console.log('\n')

// Comum
for(let i = 0; i < vowels.length; i++) {
  console.log(vowels[i])
}
console.log('\n')

// Via função
vowels.forEach(index => {
  console.log(index)
})
console.log('\n')

// Via função, pegando índice de cada
vowels.forEach(function(value, i) {
  console.log(i, value)
})
console.log('\n')

// Via função, pegando índice de cada e mostrando todos
vowels.forEach(function(value, i, preview) {
  console.log(i, value, preview)
})
