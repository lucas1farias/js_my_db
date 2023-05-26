

/*
Machado gosta muito de escrever. Já escreveu muitos contos, resenhas, relatos de viagens que fez, 
além de um pequeno romance. Agora Machado quer participar de um concurso de contos, 
que tem {{{ regras muito rígidas sobre o formato de submissão do conto. }}}

As regras do concurso especificam 
  . O número máximo de caracteres por linha, 
  . O número máximo de linhas por página, 
  . Além de limitar o número total de páginas.
  . Adicionalmente, cada palavra deve ser escrita integralmente em uma linha 
  . Ou seja, a palavra não pode ser separada silabicamente em duas linhas. 

Machado quer escrever um conto com o maior número de palavras possível, dentro das regras do concurso, e 
precisa de sua ajuda. 

Dados o número máximo de caracteres por linha, 
o número máximo de linhas por página, 
e as palavras do conto que Machado está escrevendo, 
{{{ ele quer saber o número mínimo de páginas que seu conto utilizaria seguindo as regras do concurso }}}

Entrada
A {{{ primeira linha }}} de um caso de teste contém {{{ três inteiros }}} 
  {{{ N (2 ≤ N ≤ 1000) }}} {{{ L (1 ≤ L ≤ 30 ) }}} e {{{ C (1 ≤ C ≤ 70) }}}
  respectivamente: o número de palavras, o núm. máximo de linhas por página e o núm. máximo de caracteres por linha. 

O conto de Machado é inovador e não contém: 
  {{{ nenhum caractere além de letras maiúsculas e minúsculas e espaços em branco }}}
  sem letras acentuadas e sem cedilha. 

A {{{ segunda linha }}} contém o conto de Machado, 
  composto de N palavras (1 ≤ comprimento de cada palavra ≤ C) separadas por espaços em branco; 
  há espaço em branco somente entre duas palavras, e entre duas palavras há exatamente um espaço em branco. 
  O final da entrada é determinado pelo final de arquivo (EOF).

Saída
Para cada caso de teste imprima uma única linha, contendo um único número inteiro, 
indicando o número mínimo de páginas que o conto de Machado ocupa, considerando as regras do concurso.

Exemplo de Entrada	                                                                   Exemplo de Saída
14 4 20                                                                                2
Se mana Piedade tem casado com Quincas Borba apenas me daria uma esperanca colateral   1
16 3 30                                                                                3
No dia seguinte entrou a dizer de mim nomes feios e acabou alcunhando me Dom Casmurro  3
5 2 2
a de i de o
5 2 2
a e i o u
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
