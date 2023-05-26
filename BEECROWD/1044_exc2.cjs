

/*
Leia 2 valores inteiros (A e B). 
Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", 
indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.

Exemplo de Entrada: 6 24	Exemplo de Saída: Sao Multiplos
Exemplo de Entrada: 6 25	Exemplo de Saída: Nao sao Multiplos

1. I am trying to create an algorithm that tells if numbers are multiples amoung each other
2. This is my algorithm

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const num_a = entrada(lines, 'int')
  const num_b = entrada(lines, 'int')
  
  const respostas = ['Sao Multiplos', 'Nao sao Multiplos']
  const multiplos_entre_si = eh_multiplo(num_a, num_b)
  
  exibir(`${multiplos_entre_si ? respostas[0] : respostas[1]}`)
}

function exibir(conteudo) {
  console.log(conteudo)
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

function eh_multiplo(num_a, num_b) {
  return num_b % num_a == 0
}

main()

3. Beecrowd says it is 5% wrong
4. During their several tests, they found an input that was supposed to have as output "Sao Multiplos" and my algorithm returned "Nao sao Multiplos"
5. The issue is that they do not inform what input they used
6. What is wrong with my code to be 5% wrong?
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const num_a = entrada(lines, 'int')
  const num_b = entrada(lines, 'int')
  
  const respostas = ['Sao Multiplos', 'Nao sao Multiplos']
  const multiplos_entre_si = eh_multiplo(num_a, num_b) || eh_multiplo(num_b, num_a)
  
  exibir(`${multiplos_entre_si ? respostas[0] : respostas[1]}`)
}

function exibir(conteudo) {
  console.log(conteudo)
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

function eh_multiplo(num_a, num_b) {
  return num_b % num_a == 0
}

main()
