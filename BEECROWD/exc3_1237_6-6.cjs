

/*
Encontre A MAIOR SUBSTRING COMUM ENTRE AS DUAS STRINGS INFORMADAS. 
A substring pode ser qualquer parte da string, inclusive ela toda. 
Se não houver subseqüência comum, a saída deve ser “0”. 
A comparação é case sensitive ('x' != 'X').

Entrada
A entrada contém vários casos de teste. 
Cada caso de teste é composto por duas linhas, cada uma contendo uma string. 
Ambas strings de entrada contém entre 1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), 
inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').

Saída
O tamanho da maior subsequência comum entre as duas Strings.

Exemplo de Entrada	     Exemplo de Saída
abcdef                   2
cdofhij                  1
TWO                      0
FOUR                     7
abracadabra              vazio
open                     vazio
Hey This java is hot     vazio
Java is a new paradigm   vazio
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {

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

main()
