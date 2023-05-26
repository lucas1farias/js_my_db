

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function main() {
  const n = parseInt(lines.shift())
  const primos = capturar_primos_anteriores(n, 2)
  const primos_gemeos = subtrair_num_primos(primos)
  exibir(primos_gemeos)
}

function exibir(txt) {
  console.log(txt)
}

function eh_primo(n) {
  if (n < 2) {
    return false
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  
  return true
}

function capturar_primos_anteriores(valor) {
  let primos = []
  let contador = 0
  
  for (let i = valor; i >= 0; i--) {
    if (eh_primo(i)) {
      primos.push(i)
      contador++
    }
  }
  return primos
}

function subtrair_num_primos(alvo) {
  let lista = []
  let i2 = 1

  for (let i = 0; i < alvo.length; i++) {
    if (alvo[i] - alvo[i2] === 2) {
      lista.push(alvo[i])
      lista.push(alvo[i2])
      break
    }
    i2 += 1
  }
  
  return `${lista[1]} ${lista[0]}`
}

main()
