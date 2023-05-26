

/*

*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

console.log(lines)

// Índice 0 de lines
let N = parseInt(lines.shift()) 

while (N) {
  let maior = 0
  let frases = []

  for (let l = 0; l < N; l++) {
    let line = lines.shift()
    line = line.split(' ').filter(i => i != false).join(' ')

    if (maior < line.length) 
    maior = line.length
    frases.push(line)
  }
  N = parseInt(lines.shift())
}
