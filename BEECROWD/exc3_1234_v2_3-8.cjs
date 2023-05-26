

function obter_codigo_letra(char) {
  return char.charCodeAt(0)
}

function reverter_codigo_letra(codigo) {
  return String.fromCharCode(codigo)
}

function eh_maiuscula(char) {
  let codigo_letra = obter_codigo_letra(char)
  return codigo_letra >= 65 && codigo_letra <= 90 
}

let frase_nova = []
let frase = 'This is a dancing sentence'
let indice_inicial = 0
let primeira_letra_eh_maiuscula = null

for (let i = 0; i < frase.length; i++) {
  if (frase[i] != ' ') {
    indice_inicial = i
    break
  }
}

console.log(frase_nova)
for (let i = 0; i < indice_inicial; i++) {
  frase_nova.push(' ')
}
console.log(frase_nova)

primeira_letra_eh_maiuscula = eh_maiuscula(frase[indice_inicial])

console.log(indice_inicial)
console.log(primeira_letra_eh_maiuscula)

for (let i = indice_inicial; i < frase.length; i++) {
  // ThIs Is A dAnCiNg SeNtEnCe
  console.log(i, frase[i])
  // 0 2 5 8 11 13 15 18 20 22 24
}