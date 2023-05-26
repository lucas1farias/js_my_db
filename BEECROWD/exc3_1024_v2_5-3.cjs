

/*
5 5000000
3 123456
9 23454324543423
9 99999999991999999
7 777
0 0
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');
console.log(lines)

function main() {
  while (lines.length != 0) {
    const linha = lines.shift()
    const codigo = tornar_lista(linha + ' ', ' ', fatiar)
    const id = codigo[0]
  }

  // if (qtd_valores >= 1 || qtd_valores <= (10 ** 4)) {
  //   for (let i = 0; i < parseInt(qtd_valores); i++) {
  //     const [codigo] = entradas[i].split('\r').map(s => s.trim())
      
  //     if (codigo.length >= 1 || codigo.length <= (10 ** 3)) {
  //       const etapa_a = editar_char_codigo_letras(codigo, 3)
  //       const etapa_b = inverter_texto(etapa_a)
  //       const indice_centro = obter_metade_texto(etapa_b)
  //       const texto_metade_direita = fatiar_texto(etapa_b, indice_centro)
  //       const texto_metade_esquerda = fatiar_texto(etapa_b, indice_centro, true)
  //       const texto_metade_direita_alterada = editar_char_codigo_global(texto_metade_direita, 1, false)
  //       const codigo_final = texto_metade_esquerda + texto_metade_direita_alterada
  //       exibir(codigo_final)
  //     }
  //   }
  // }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function fatiar(alvo, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += alvo[i]
  }
  return string
}

function tornar_lista(alvo, separador, funcao) {
  let lista = []
  let a = 0

  for (let i = 0; i <= alvo.length; i++) {
    if (alvo[i] === separador) {
      lista.push(funcao(alvo, a, i - 1))
      a = i + 1
    }
  }
  return lista
}

function id_na_sequencia() {

}

function obter_codigo_letra(char) {
  return char.charCodeAt(0)
}

function eh_letra(char) {
  const codigo_ascii = obter_codigo_letra(char)
  const eh_letra_maiuscula = valor_entre(codigo_ascii, 65, 90)
  const eh_letra_minuscula = valor_entre(codigo_ascii, 97, 122)
  
  return eh_letra_maiuscula || eh_letra_minuscula ? true : false
}

function reverter_codigo_letra(codigo) {
  return String.fromCharCode(codigo)
}

function editar_char_codigo(char, n_saltos, positivo=true) {
  if (!positivo) {
    n_saltos = - n_saltos
  }
  let codigo_da_letra = obter_codigo_letra(char) + n_saltos
  return reverter_codigo_letra(codigo_da_letra)
}

function editar_char_codigo_letras(texto, n_saltos, positivo=true) {
  let filtro = ''
  if (!positivo) {
    for (let i = 0; i < texto.length; i++) {
      if (eh_letra(texto[i])) {
        filtro += editar_char_codigo(texto[i], n_saltos, false)
      } 
      // Manter o char que não for letra sem alteração
      else {
        filtro += texto[i]
      }
    }
  } 

  //
  else {
    for (let i = 0; i < texto.length; i++) {
      if (eh_letra(texto[i])) {
        filtro += editar_char_codigo(texto[i], n_saltos)
      } 
      // Manter o char que não for letra sem alteração
      else {
        filtro += texto[i]
      }
    }
  }
  
  return filtro
}

function editar_char_codigo_global(texto, n_saltos, positivo=true) {
  let filtro = ''
  if (!positivo) {
    for (let i = 0; i < texto.length; i++) {
      filtro += editar_char_codigo(texto[i], n_saltos, false)
    } 
  }

  else {
    for (let i = 0; i < texto.length; i++) {
      filtro += editar_char_codigo(texto[i], n_saltos)
    }
  }
  
  return filtro
}

function inverter_texto(texto) {
  let texto_invertido = ''
  let contador = 0
  for (let i = 0; i < texto.length; i++) {
    texto_invertido += texto[(texto.length - 1) - contador]
    contador++
  }
  return texto_invertido
}

function obter_metade_texto(texto) {
  return Math.trunc(texto.length / 2)
}

function fatiar_texto(texto, indice, invertido=false) {
  let texto_formatado = ''
  
  if (invertido) {
    for (let i = 0; i < indice; i++) {
      texto_formatado += texto[i]
    }
  } 
  // Não invertido
  else {
    for (let i = indice; i < texto.length; i++) {
      texto_formatado += texto[i]
    }
  }
  
  return texto_formatado
}

main()
