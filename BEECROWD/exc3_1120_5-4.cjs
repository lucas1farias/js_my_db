

/*
Durante anos, todos os contratos da Associação de Contratos da Modernolândia (ACM) 
foram datilografados em uma velha máquina de datilografia.

Recentemente Sr. Miranda, um dos contadores da ACM, 
percebeu que a {{{ máquina apresentava falha em um, e apenas um, dos dígitos numéricos }}}. 
Mais especificamente, {{{ o dígito falho, quando datilografado, não é impresso na folha }}}, 
como se a tecla correspondente não tivesse sido pressionada. 

Ele percebeu que isso poderia ter {{{ alterado os valores numéricos representados nos contratos }}} e, 
preocupado com a contabilidade, quer saber, 
{{{ a partir dos valores originais negociados nos contratos }}}, que ele mantinha em anotações manuscritas, 
{{{{{ quais os valores de fato representados nos contratos. }}}}}

Por exemplo, 
SE a máquina apresenta falha no {{{ dígito 5, o valor 1500 }}} seria {{{ datilografado no contrato como 100 }}}, 
pois o 5 não seria impresso. 
Note que o Sr. Miranda quer saber o {{{ valor numérico representado no contrato }}}, ou seja, 
nessa mesma máquina, {{{ o número 5000 corresponde ao valor numérico 0, e não 000 }}} (como ele de fato aparece impresso).

Entrada
A entrada consiste de diversos casos de teste, cada um em uma linha. 
Cada linha contém {{{ dois inteiros D e N }}} {{{ 1 ≤ D ≤ 9 }}} {{{ 1 ≤ N < 10 ** 100 }}}, representando, respectivamente, 

D = o dígito que está apresentando problema na máquina 
N = o número que foi negociado originalmente no contrato  (que podem ser grande).

O {{{ ultimo caso de teste (último exemplo) }}} é seguido por uma linha que contém apenas dois zeros separados por espaços em branco.

Saída
Para cada caso de teste da entrada o seu programa deve imprimir uma linha contendo um único inteiro V, 
o valor numérico representado de fato no contrato.

  Exemplo de Entrada	Exemplo de Saída                      Instrução
  5 5000000           0                                     O 5 está com defeito, portanto ele some
  3 123456            12456                                 O 3 está com defeito, portanto ele some
  9 23454324543423    23454324543423                        O número se mantêm, pois não há 9
  9 99999999991999999 1                                     O 9 está com defeito, portanto, todos os 9 somem
  7 777               0                                     O 7 está com defeito, e só há 7, portanto se retorna 0
  0 0                 espaços em branco (provavelmente ' ')
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  
  const entradas = lines
  
  for (let i = 0; i < entradas.length; i++) {
    const [array] = entradas[i].split('\n').map(index => index.trim())
    const codigo = array.split(' ')[0]
    const codigo_repr = array.split(' ')[1]
    
    if (codigo.length >= 1 && codigo.length <= 9 && codigo_repr.length >= 1 && codigo_repr.length <= 10 ** 100) {
      
      const verificacao = esta_contido(codigo, codigo_repr)
      
      if (verificacao) {
        
        let codigo_repr_array = alterar_indices(codigo_repr, ' ').split(' ')
        let codigo_repr_array_filtrado = remover_digito(codigo, codigo_repr_array)
        let codigo_anulado = verificar_nulabilidade(codigo_repr_array_filtrado)

        if (codigo_anulado) {
          if (codigo != '0' || codigo_repr != '0') {
            exibir(0)
          }
        } else {
          exibir(codigo_repr_array_filtrado.join(''))
        }
      } 

      else {
        exibir(codigo_repr)
      }

      if (codigo === '0' || codigo_repr === '0') {
        exibir('')
      }
    }
  }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function esta_contido(ref, alvo) {
  return alvo.includes(ref)
}

function alterar_indices(alvo, simbolo) {
  let alvo_alterado = ''
  for (let i = 0; i < alvo.length; i++) {
    alvo_alterado += alvo[i] + simbolo
  }
  return alvo_alterado
}

function remover_digito(ref, alvo) {
  let similaridades = []
  let resultado = []
  
  for (let i = 0; i < alvo.length; i++) {
    alvo[i] === ref || alvo[i] === '' ? similaridades.push(true) : similaridades.push(false) 
  }
  
  for (let i = 0; i < similaridades.length; i++) {
    !similaridades[i] ? resultado.push(alvo[i]) : null 
  }

  return resultado
}

function verificar_nulabilidade(alvo) {
  let contador = 0
  for (let i = 0; i < alvo.length; i++) {
    if (alvo[i] === '0' || alvo[i] === '') {
      contador++
    }
  }
  return contador == alvo.length ? true : false
}

main()
