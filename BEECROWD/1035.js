

/*
Leia 4 valores inteiros A, B, C e D. 
A seguir, 
se B for maior do que C e se D for maior do que A, e 
a soma de C com D for maior que a soma de A e B e 
se C e D, ambos, forem positivos e 
se a variável A for par 
escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

Entrada
Quatro números inteiros A, B, C e D.

Saída
Mostre a respectiva mensagem após a validação dos valores.

Exemplo de Entrada	Exemplo de Saída
5 6 7 8

Valores nao aceitos

2 3 2 6

Valores aceitos
*/

import { question } from "readline-sync"

var lines = question().split('\n')

function main() {
  let entrada = lines[0].split(' ')
  const a = entrada[0]
  const b = entrada[1]
  const c = entrada[2]
  const d = entrada[3]
  const nao = 'Valores nao aceitos'
  const sim = 'Valores aceitos'
  const condicao_a = comparacao_grandeza(b, c)
  const condicao_b = comparacao_grandeza(d, a)
  const condicao_c = comparacao_grandeza(c + d, a + b)
  const condicao_d = verificar_se_positivo(c) && verificar_se_positivo(d)
  const condicao_e = verificar_se_par(a)
  let autenticador = 0
  const requisitos = [condicao_a, condicao_b, condicao_c, condicao_d, condicao_e]
  for (let motor = 0; motor < requisitos.length; motor++) {
    let cada_indice = requisitos[motor]
    if (!cada_indice) {
      autenticador++
      break
    }
  }
  if (autenticador == 0) {
    exibir(sim)
  } else {
    exibir(nao)
  }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function comparacao_grandeza(n1, n2) {
    return n1 > n2
}

function verificar_se_positivo(n) {
  return n > 0
}

function verificar_se_par(n) {
  return n % 2 == 0
}

main()
