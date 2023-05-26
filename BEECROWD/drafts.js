

// function range(min, max) {
//   let array = []
//   for (let i = min; i <= max; i++) {
//     array.push(i)
//   }
//   return array
// }

function descobrir_indice(alvo, ref) {
  let array = []
  for (let i = 0; i < alvo.length; i++) {
    if (alvo[i] === ref) {
      array.push(i)
    }
  }
  return array
}

function maior_menor(alvo, qual) {
  let contador = 0
  let min = Infinity
  let max = -min
  let entrada = 0

  while (contador < alvo.length) {
    // entrada = entrada_num('Digite um número')
    entrada = alvo[contador]
    if (entrada <= min) {
      min = entrada
    }
    if (entrada >= max) {
      max = entrada
    }
    contador++
  }
  return qual == 0 ? min : max
}

function eh_primo2(n) {
  if (n < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

function criar_separador(alvo, onde, separador) {
  let string = ''
  for (let i = 0; i < alvo.length; i++) {
    i === onde ? string += separador + alvo[i] : string += alvo[i]
  }
  return string
}

function vetor(tamanho) {
  return Array(tamanho)
}

function numero_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function vetor_numerico(vetor, min, max) {
  for (let i = 0; i <= vetor.length - 1; i++) {
    vetor[i] = numero_aleatorio(min, max)
  }
  return vetor
}

const vetor_a = vetor(20)
console.log(vetor_a)
const vetor_b = vetor_numerico(vetor_a, 7, 78)
console.log(vetor_b)
console.log(descobrir_indice(vetor_b, 10))
