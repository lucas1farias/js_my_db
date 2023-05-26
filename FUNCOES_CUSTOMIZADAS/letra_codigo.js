

function letra_codigo(codigo) {
  return String.fromCharCode(codigo)
}

const letra_a = letra_codigo(97)
const letra_a_maiuscula = letra_codigo(97 - 32)
console.log(letra_a)
console.log(letra_a_maiuscula)
