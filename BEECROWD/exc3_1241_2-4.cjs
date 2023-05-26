

/*
Paulinho tem em suas mãos um novo problema. 
Agora a sua professora lhe pediu que construísse um programa para 
  verificar, à partir de dois valores muito grandes A e B, se B corresponde aos últimos dígitos de A.

Entrada
A entrada consiste de vários casos de teste. 
A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. (4) 
Cada caso de teste consiste de dois valores A e B maiores que zero, cada um deles podendo ter até 1000 dígitos.

Saída
Para cada caso de entrada 
  imprima uma mensagem indicando se o segundo valor encaixa no primeiro valor, confome exemplo abaixo.

Exemplo de Entrada	                     Exemplo de Saída
4                                        
56234523485723854755454545478690 78690   encaixa  
5434554 543                              nao encaixa 
1243 1243                                encaixa      
54 64545454545454545454545454545454554   nao encaixa  

2. Eu usei o seguinte algoritmo

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const qtd_valores = lines.shift().trim()
  const entradas = lines
  
  const linha_a_item_a = entradas[0].split(' ')[0].trim()
  const linha_a_item_b = entradas[0].split(' ')[1].trim()
  
  const linha_b_item_a = entradas[1].split(' ')[0].trim()
  const linha_b_item_b = entradas[1].split(' ')[1].trim()

  const linha_c_item_a = entradas[2].split(' ')[0].trim()
  const linha_c_item_b = entradas[2].split(' ')[1].trim()

  const linha_d_item_a = entradas[3].split(' ')[0].trim()
  const linha_d_item_b = entradas[3].split(' ')[1].trim()
  
  const resultados = [
    verificar_se_encaixa(linha_a_item_a, linha_a_item_b),
    verificar_se_encaixa(linha_b_item_a, linha_b_item_b),
    verificar_se_encaixa(linha_c_item_a, linha_c_item_b),
    verificar_se_encaixa(linha_d_item_a, linha_d_item_b)
  ]
  
  for (let i = 0; i < parseInt(qtd_valores); i++) {
    exibir(`${resultados[i] ? 'encaixa' : 'nao encaixa'}`)
  }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function verificar_se_encaixa(va, vb) {
  let similaridades = 0
  
  if (va.length < vb.length) {
    return false
  } 
  
  else {
    let contador = 0
    let indice_maior = va.length - vb.length
    let indice_menor = 0
    
    for (let i = contador; i < vb.length; i++) {
      if (va[indice_maior] == vb[indice_menor]) {
        similaridades++
      }
      contador++
      indice_maior++
      indice_menor++
    }
  }
  return similaridades == vb.length ? true : false
}

main()

3. Há algo de errado com meu algoritmo?
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const qtd_valores = lines.shift().trim()

  const entradas = lines

  for (let i = 0; i < parseInt(qtd_valores); i++) {
    const [A, B] = entradas[i].split(' ').map(s => s.trim())
    exibir(verificar_se_encaixa(A, B) ? 'encaixa' : 'nao encaixa')
  }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function verificar_se_encaixa(va, vb) {
  let similaridades = 0
  
  if (va.length < vb.length) {
    return false
  } 
  
  else {
    let contador = 0
    let indice_maior = va.length - vb.length
    let indice_menor = 0
    
    for (let i = contador; i < vb.length; i++) {
      if (va[indice_maior] == vb[indice_menor]) {
        similaridades++
      }
      contador++
      indice_maior++
      indice_menor++
    }
  }
  return similaridades == vb.length ? true : false
}

main()
