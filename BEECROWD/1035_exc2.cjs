

/*
Leia 4 valores inteiros A, B, C e D. 
A seguir, 
se B for maior do que C e 
se D for maior do que A, e 
a soma de C com D for maior que a soma de A e B e
se C e D, ambos, forem positivos e 
se a variável A for par 
escrever a mensagem "Valores aceitos", 
senão escrever "Valores nao aceitos".

Entrada: Quatro números inteiros A, B, C e D.
Saída: Mostre a respectiva mensagem após a validação dos valores.

Exemplo de Entrada: 5 6 7 8	Exemplo de Saída: Valores nao aceitos
                    2 3 2 6                   Valores aceitos
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const a = entrada(lines, 'int')
  const b = entrada(lines, 'int')
  const c = entrada(lines, 'int')
  const d = entrada(lines, 'int')

  const nao = 'Valores nao aceitos'
  const sim = 'Valores aceitos'

  const condicao_a = comparacao_grandeza(b, c)
  const condicao_b = comparacao_grandeza(d, a)
  const condicao_c = comparacao_grandeza(c + d, a + b)
  const condicao_d = verificar_se_positivo(c) && verificar_se_positivo(d)
  const condicao_e = verificar_se_par(a)

  let autenticador = 0
  const requisitos = (char(condicao_a) + char(condicao_b) + char(condicao_c) + char(condicao_d) + condicao_e).split(' ')
  
  for (let motor = 0; motor < requisitos.length; motor++) {
    let cada_indice = requisitos[motor]
    if (cada_indice === 'false') {
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

function entrada(fonte, tipo) {
  if (tipo == 'str') {
    return fonte.shift()
  } else if (tipo == 'int') {
    return parseInt(fonte.shift())
  } else if (tipo == 'float') {
    return parseFloat(fonte.shift())
  } 
}

function char(string) {
  return string + ' '
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
