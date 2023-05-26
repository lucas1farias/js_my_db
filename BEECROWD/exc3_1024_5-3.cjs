

/*
Algém fez a 1024?
Resultado na IDE: tá certo, ta batendo!
Resultado no Bee: tá errado! wrong answer 100%!
Eu: Pode me levar, Jesus, estou pronto x_x

Solicitaram para que você construisse um programa simples de criptografia. 

Este programa deve 
  * Possibilitar enviar mensagens codificadas sem que alguém consiga lê-las. 
  * O processo é muito simples. São feitas TRÊS PASSADAS em todo o texto.

========== Na primeira passada ==========
  * Somente caracteres que sejam letras minúsculas e maiúsculas devem ser deslocadas 3 posições para a direita, 
  * Segundo a tabela ASCII: letra 'a' deve virar letra 'd', letra 'y' deve virar caractere '|' e assim sucessivamente. 

========== Na segunda passada ==========
  * A linha deverá ser invertida. 

========== Na terceira passada ==========
  * Todo e qualquer caractere a partir da metade em diante (truncada) devem ser: 
    A: deslocados uma posição PARA A ESQUERDA na tabela ASCII. Neste caso, 'b' vira 'a' e 'a' vira '`'.

========== EXEMPLO ========== T + 3 = W ... e + 3 = h ... (x = '{' chatGPT diz que é 'a') ... y = | ... z = }
  * SE a entrada for “Texto #3”, o primeiro processamento sobre esta entrada deverá produzir “Wh{wr #3”. 
  * O resultado do segundo processamento inverte os caracteres e produz “3# rw{hW”. 
  * Por último, com o deslocamento dos caracteres da metade em diante, o resultado final deve ser “3# rvzgV”.

Entrada
A entrada contém vários casos de teste. 
A primeira linha de cada caso de teste contém um inteiro {{{{{ N (1 ≤ N ≤ 1 * 10 ** 4) }}}}} 
indicando a quantidade de linhas que o problema deve tratar. 
As N linhas contém cada uma delas M {{{{{ (1 ≤ M ≤ 1 * 10 ** 3) }}}}} caracteres.

Saída
Para cada entrada, deve-se apresentar a mensagem criptografada.

Exemplo de Entrada	Exemplo de Saída
4                   3# rvzgV
Texto #3            1FECedc
abcABC1             ks. \n{frzx
vxpdylY .ph         gi.r{hyz-xx
vv.xwfxo.fd         vazio
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const qtd_frases = entrada(lines, 'int')
  const frase_a = entrada(lines, 'str')
  const frase_b = entrada(lines, 'str')
  const frase_c = entrada(lines, 'str')
  const frase_d = entrada(lines, 'str')

  const frase_a_etapa_a = editar_char_codigo_letras(frase_a, 3)
  console.log(frase_a_etapa_a)
  const frase_a_etapa_b = inverter_texto(frase_a_etapa_a)
  const frase_a_indice_centro = obter_metade_texto(frase_a_etapa_b)
  const frase_a_texto_metade_direita = fatiar_texto(frase_a_etapa_b, frase_a_indice_centro)
  const frase_a_texto_metade_esquerda = fatiar_texto(frase_a_etapa_b, frase_a_indice_centro, true)
  const frase_a_texto_metade_direita_alterada = editar_char_codigo_global(frase_a_texto_metade_direita, 1, false)
  const frase_a_desejada = frase_a_texto_metade_esquerda + frase_a_texto_metade_direita_alterada

  const frase_b_etapa_a = editar_char_codigo_letras(frase_b, 3)
  const frase_b_etapa_b = inverter_texto(frase_b_etapa_a)
  const frase_b_indice_centro = obter_metade_texto(frase_b_etapa_b)
  const frase_b_texto_metade_direita = fatiar_texto(frase_b_etapa_b, frase_b_indice_centro)
  const frase_b_texto_metade_esquerda = fatiar_texto(frase_b_etapa_b, frase_b_indice_centro, true)
  const frase_b_texto_metade_direita_alterada = editar_char_codigo_global(frase_b_texto_metade_direita, 1, false)
  const frase_b_desejada = frase_b_texto_metade_esquerda + frase_b_texto_metade_direita_alterada

  const frase_c_etapa_a = editar_char_codigo_letras(frase_c, 3)
  const frase_c_etapa_b = inverter_texto(frase_c_etapa_a)
  const frase_c_indice_centro = obter_metade_texto(frase_c_etapa_b)
  const frase_c_texto_metade_direita = fatiar_texto(frase_c_etapa_b, frase_c_indice_centro)
  const frase_c_texto_metade_esquerda = fatiar_texto(frase_c_etapa_b, frase_c_indice_centro, true)
  const frase_c_texto_metade_direita_alterada = editar_char_codigo_global(frase_c_texto_metade_direita, 1, false)
  const frase_c_desejada = frase_c_texto_metade_esquerda + frase_c_texto_metade_direita_alterada

  const frase_d_etapa_a = editar_char_codigo_letras(frase_d, 3)
  const frase_d_etapa_b = inverter_texto(frase_d_etapa_a)
  const frase_d_indice_centro = obter_metade_texto(frase_d_etapa_b)
  const frase_d_texto_metade_direita = fatiar_texto(frase_d_etapa_b, frase_d_indice_centro)
  const frase_d_texto_metade_esquerda = fatiar_texto(frase_d_etapa_b, frase_d_indice_centro, true)
  const frase_d_texto_metade_direita_alterada = editar_char_codigo_global(frase_d_texto_metade_direita, 1, false)
  const frase_d_desejada = frase_d_texto_metade_esquerda + frase_d_texto_metade_direita_alterada
  
  exibir(frase_a_desejada)
  exibir(frase_b_desejada)
  exibir(frase_c_desejada)
  exibir(frase_d_desejada)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function entrada(fonte, tipo) {
  if (tipo == 'str') {
    return fonte.shift().trim()
  } else if (tipo == 'int') {
    return parseInt(fonte.shift())
  } else if (tipo == 'float') {
    return parseFloat(fonte.shift())
  } 
}

function valor_entre(ref, min, max) {
  return ref >= min && ref <= max
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
