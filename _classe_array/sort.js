

// Mudar ordem dos índices 
// É o equivalente ao "shuffle" do Python
// Crescente, decrescente, aleatória
// Função só funciona se houver outra função dentro dela

let points = [1, 3, 4, 2, 5]

// Crescente
points.sort(function(a, b){return a-b})
console.log(points)

// Decrescente
points.sort(function(a, b){return b-a})
console.log(points)

// Aleatória
points.sort(function() {return Math.random() - 0.5})
console.log(points)

// Crescente Declarativa
points.sort((a, b) => a - b)
console.log('[DECLARATIVA] - crescente', points)

// Decrescente Declarativa
points.sort((a, b) => b - a)
console.log('[DECLARATIVA] - decrescente', points)

// Aleatória Declarativa
points.sort(() => Math.random() - 0.5)
console.log('[DECLARATIVA] - aleatória', points)
