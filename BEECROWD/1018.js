

/*
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o
valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir 
mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

Exemplo de Entrada	
576

Exemplo de Saída
576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00
*/

import { question } from "readline-sync"

var lines = question().split('\n')

function main() {
  let entrada = lines[0].split(' ')
  const cedula = entrada[0]
  const cedulas_de_cem = modulacao(cedula, 100, 'divisão')
  const cedulas_de_cem_resto = modulacao(cedula, 100, 'modular')
  const cedulas_de_cinquenta = modulacao(cedulas_de_cem_resto, 50, 'divisão')
  const cedulas_de_cinquenta_resto = modulacao(cedulas_de_cem_resto, 50, 'modular')
  const cedulas_de_vinte = modulacao(cedulas_de_cinquenta_resto, 20, 'divisão')
  const cedulas_de_vinte_resto = modulacao(cedulas_de_cinquenta_resto, 20, 'modular')
  const cedulas_de_dez = modulacao(cedulas_de_vinte_resto, 10, 'divisão')
  const cedulas_de_dez_resto = modulacao(cedulas_de_vinte_resto, 10, 'modular')
  const cedulas_de_cinco = modulacao(cedulas_de_dez_resto, 5, 'divisão')
  const cedulas_de_cinco_resto = modulacao(cedulas_de_dez_resto, 5, 'modular')
  const cedulas_de_dois = modulacao(cedulas_de_cinco_resto, 2, 'divisão')
  const cedulas_de_dois_resto = modulacao(cedulas_de_cinco_resto, 2, 'modular')
  const cedulas_de_um = modulacao(cedulas_de_dois_resto, 1, 'divisão')
  
  exibir(`${cedula}`)
  exibir(`${cedulas_de_cem} nota(s) de R$ 100,00`)
  exibir(`${cedulas_de_cinquenta} nota(s) de R$ 50,00`)
  exibir(`${cedulas_de_vinte} nota(s) de R$ 20,00`)
  exibir(`${cedulas_de_dez} nota(s) de R$ 10,00`)
  exibir(`${cedulas_de_cinco} nota(s) de R$ 5,00`)
  exibir(`${cedulas_de_dois} nota(s) de R$ 2,00`)
  exibir(`${cedulas_de_um} nota(s) de R$ 1,00`)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function modulacao(valor, modular, operacao) {
    if (operacao == 'divisão') {
      return Math.floor(valor / modular)
    } else {
      return valor % modular
    }
    
}

main()
