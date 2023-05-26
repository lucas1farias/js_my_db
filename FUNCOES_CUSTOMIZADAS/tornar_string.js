

// [1, 2, 3, 4, 5] = 1 2 3 4 5 
// A configuração da string se dá pela definição do separador
function tornar_string(alvo, separador) {
  let string = ''
  for (let i = 0; i <= alvo.length - 1; i++) {
    // Add separador a partir do segundo índice adiante
    i === 0 ? string += alvo[i] : string += separador + alvo[i]
  }
  return string
}

const js = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
const js_str = tornar_string(js, '')
const js_str_v2 = tornar_string(js, '.')

console.log(js)
console.log(js_str)
console.log(js_str_v2)
