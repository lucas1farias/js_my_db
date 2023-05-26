

/*
Uma sentença é chamada de dançante se: 
  . sua {{{ primeira letra for maiúscula }}} E {{{ cada letra subsequente for o oposto }}} da letra anterior. 
  . {{{ espaços devem ser ignorados }}} ao determinar o case (minúsculo/maiúsculo) de uma letra. 

Por exemplo, "A b Cd" é uma sentença dançante porque 
a primeira letra ('A') é maiúscula, 
a próxima letra ('b') é minúscula, 
a próxima letra ('C') é maiúscula, 
e a próxima letra ('d') é minúscula.

Entrada
A entrada contém vários casos de teste. 
Cada caso de teste é composto por uma linha que contém uma sentença, que é uma string que contém entre 1 e 50 caracteres 
('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').

Saída
Transforme a sentença de entrada em uma sentença dançante (conforme o exemplo abaixo) 
trocando as letras para minúscula ou maiúscula onde for necessário. 
Todos os espaços da sentença original deverão ser preservados, ou seja, 
" sentence " deverá ser convertido para " SeNtEnCe ".

Exemplo de Entrada	                        Exemplo de Saída
This is a dancing sentence                  ThIs Is A dAnCiNg SeNtEnCe
  This   is         a  dancing   sentence   ThIs   Is         A  dAnCiNg   SeNtEnCe  
aaaaaaaaaaa                                 AaAaAaAaAaA
z                                           Z
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');
console.log(lines)

function main() {
  let frase_nova = []
  let frase = 'This is a dancing sentence'
  let a = 0
  let b = 0
  let indice_inicial = 0
  
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != ' ') {
      indice_inicial = i
      break
    }
  }
  
  // console.log(indice_inicial)

  for (let i = 0; i < indice_inicial; i++) {
    frase_nova.push(' ')
  }
  
  console.log(frase_nova)

  if (eh_maiuscula(frase[indice_inicial])) {
    console.log('A PRIMEIRA LETRA DA PALAVRA É MAIÚSCULA')
    a++
    frase_nova.push(frase[indice_inicial])
  }  
  else {
    console.log('A PRIMEIRA LETRA DA PALAVRA É MINÚSCULA')
    b++
    frase_nova.push(reverter_codigo_letra(obter_codigo_letra(frase[indice_inicial]) - 32))
  }

  console.log(frase_nova)

  let indice_zero_maiusculo = a > 0
  let indice_zero_minusculo = b > 0
  
  if (indice_zero_maiusculo) {
    console.log('PRIMEIRA LETRA É MAIÚSCULA')

    for (let i = indice_inicial; i < frase.length; i++) {
      if (frase[i] == ' ') {
        frase_nova.push(' ')
      }
      if (i % 2 == 0 && frase[i] != ' ' && i != indice_inicial) {
        frase_nova.push(reverter_codigo_letra(obter_codigo_letra(frase[i]) - 32))
      }
      else if (i % 2 != 0 && frase[i] != ' ') {
        frase_nova.push(frase[i])
      }
    }
  }
  
  else if (indice_zero_minusculo) {
    
    for (let i = indice_inicial; i < frase.length; i++) {
      if (frase[i] == ' ') {
        frase_nova.push(' ')
      }
      if (i % 2 == 0 && frase[i] != ' ') {
        frase_nova.push(frase[i])
      }
      else if (i % 2 != 0 && frase[i] != ' ') {
        frase_nova.push(reverter_codigo_letra(obter_codigo_letra(frase[i]) - 32))
      }
    }
  }

  console.log('=================')
  console.log(frase_nova.join(''))
}

function exibir(conteudo) {
  console.log(conteudo)
}

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

main()
