

/*
Uma faixa de letras é:
  . um conjunto de letras minúsculas alfabeticamente consecutivas tomadas de 'a' até 'z'. 

A menor e maior letras da faixa, separadas por dois pontos {{{ ':' }}}, são:
  . usadas para representar a faixa de letras. 
  
  Por exemplo:
  -> A faixa "a:c" representa as letras consecutivas 'a', 'b' e 'c'. (as aspas não fazem parte da faixa). 
  -> A faixa "w:z" representa as letras 'w', 'x', 'y' e 'z'. 
  -> A faixa "m:m" representa apenas a letra 'm'.
  -> INCLUSIVA para ambas P1:P2

========== Entrada ==========
Cada linha de entrada é um caso de teste. 
Cada caso de teste contém uma string, que :
  . pode ser vazia e cujas letras podem não estar em ordem alfabética, de letras minúsculas (a-z) e espaços.
  . a string conterá entre 0 e 50 caracteres, inclusive.

Saída
Para cada caso de teste de entrada, seu programa deverá: 
  . imprimir as faixas de letras ordenadas alfabeticamente pelo menor valor de cada faixa. 
  . faixas de letras devem representar a maior sequencia possível de letras de entrada em ordem crescente. 
  . ignore espaços e letras duplicadas contidas na entrada.
  . se a string for vazia, apenas {{{ imprima uma nova linha. }}}

Por exemplo:
  . a string "fb xee ac" tem três faixas de letras
  . "a:c" (as letras 'a', 'b' e 'c')
  . "e:f" (as letras 'e' e 'f')
  . "x:x" (a letra 'x')
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function main() {
  /*
  aha                                        a:a, h:h
  xyzzy                                      x:z
  quick brown fox jumps over the lazy dog    a:z
  fbxeac                                     a:c, e:f, x:x
    x                                        x:x
   b z a x c y                               a:c, x:z
  bdfhjlnprtvxz                              b:b, d:d, f:f, h:h, j:j, l:l, n:n, p:p, r:r, t:t, v:v, x:x, z:z

  az def                                     a:a, d:f, z:z

  1. Eu preciso saber quantas possibilidades são possíveis dentro do alfabeto de combinações entre as letras de A até Z
  */
  let letras = 'az def'
  console.log(letras.split('').sort().join('').trim())
}

main()
