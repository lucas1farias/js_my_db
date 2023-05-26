

/*
Implemente um programa denominado combinador, que 

RECEBE DUAS STRINGS E DEVE COMBINÁ-LAS, ALTERNANDO AS LETRAS DE CADA STRING 

começando com a primeira letra da primeira string, seguido pela primeira letra da segunda string, 
em seguida pela segunda letra da primeira string, e assim sucessivamente. 
As letras restantes da cadeia mais longa devem ser adicionadas ao fim da string resultante e retornada.

Entrada
A entrada contém vários casos de teste. 
A primeira linha contém um inteiro N que indica a quantidade de casos de teste que vem a seguir. 
Cada caso de teste é composto por uma linha que contém duas cadeias de caracteres, 
cada cadeia de caracteres contém entre 1 e 50 caracteres inclusive.

Saída
Combine as duas cadeias de caracteres da entrada como mostrado no exemplo abaixo e exiba a cadeia resultante.

Exemplo de Entrada	Exemplo de Saída
2                   TopCoder
Tpo oCder           abab
aa bb               vazio
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
