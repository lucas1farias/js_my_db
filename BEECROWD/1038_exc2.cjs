

/*
Com base na tabela abaixo, escreva um programa que leia o CÓDIGO de um item e a QUANTIDADE deste item. 
A seguir, calcule e mostre o valor da conta a pagar.

Entrada: O arquivo de entrada contém dois valores inteiros correspondentes ao código e 
à quantidade de um item conforme tabela acima.

Saída: O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

Exemplo de Entrada: 3 2	Exemplo de Saída: Total: R$ 10.00
                    4 3                   Total: R$ 6.00
                    2 3                   Total: R$ 13.50

Código  Espec.           Preço
1       Cachorro Quente  R$ 4.00
2       X-Salada         R$ 4.50
3       X-Bacon          R$ 5.00
4       Torrada simples  R$ 2.00
5       Refrigerante     R$ 1.50
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
    const codigo = entrada(lines, 'int') 
    const qtd = entrada(lines, 'int')

    const produtos_id = '1 2 3 4 5'.split(' ')
    const produtos_preco = '4.00 4.50 5.00 2.00 1.50'.split(' ')
    
    const conta = obter_preco_conta(produtos_id, produtos_preco, codigo, qtd, 2)
    const saida = `Total: R$ ${conta}`
    
    exibir(saida)
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

function decimal(n, casas) {
  return n.toFixed(casas)
} 

function obter_preco_conta(produtos_id, produtos_preco, id_prod, qtd_prod, casas) {
  let preco = ''

  for(let i = 0; i < produtos_id.length; i++) {
    if (produtos_id[i] == id_prod) {
      preco = produtos_preco[i]
    }
  }

  const total = decimal((qtd_prod * preco), casas)
  
  return total
}

main()
