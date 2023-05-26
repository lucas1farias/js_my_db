

/*
Você deve fazer um programa que leia um valor qualquer e 
apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. 
Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000
(50,75] indica valores maiores que 25 Ex: 50.0000001 até o valor 75.0000000
(75,100] indica valores maiores que 25 Ex: 75.0000001 até o valor 100.0000000

Entrada
O arquivo de entrada contém um número com ponto flutuante qualquer.

Saída
A saída deve ser uma mensagem conforme exemplo abaixo.

Exemplo de Entrada	Exemplo de Saída
25.01               Intervalo (25,50]
25.00               Intervalo [0,25]
100.00              Intervalo (75,100]
-25.02              Fora de intervalo
*/

import { question } from "readline-sync"

var lines = question().split('\n')

function main() {
    let entrada = lines[0].split(' ')
    const n = entrada[0]
    const resultado = achar_intervalo(n)
    exibir(resultado)
}

function esta_entre(n1, n2, n3) {
  return n1 >= n2 && n1 <= n3
}

function achar_intervalo(n1) {
  const [insignia_a, insignia_b, insignia_c, insignia_d] = ['[0,25]', '(25,50]', '(50,75]', '(75,100]']
  const conjunto_a = esta_entre(n1, 0, 25.0000)
  const conjunto_b = esta_entre(n1, 25.00001, 50.0000000)
  const conjunto_c = esta_entre(n1, 50.0000001, 75.0000000)
  const conjunto_d = esta_entre(n1, 75.0000001, 100.0000000)
  const rotulo_fixo = 'Intervalo '
  const vazio = 'Fora de intervalo'
  let casa = ''
  
  if (conjunto_a) {
    casa = rotulo_fixo + insignia_a
  } else if (conjunto_b) {
    casa = rotulo_fixo + insignia_b
  } else if (conjunto_c) {
    casa = rotulo_fixo + insignia_c
  } else if (conjunto_d) {
    casa = rotulo_fixo + insignia_d
  } else {
    casa = vazio
  }
  return casa
}

function exibir(conteudo) {
  console.log(conteudo)
}

main()
