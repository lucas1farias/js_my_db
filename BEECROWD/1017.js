

/*
Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar um automóvel que
faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. Para efetuar o cálculo, deve-se
fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h). Assim, pode-se obter distância
percorrida e, em seguida, calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.

Entrada
O arquivo de entrada contém dois inteiros. 
O primeiro é o tempo gasto na viagem (em horas)
O segundo é a velocidade média durante a mesma (em km/h).

Saída
Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal

Exemplo de Entrada	Exemplo de Saída
10 85               70.833
*/

import { question } from "readline-sync"  

var lines = question().split('\n') 

function main() {
  let entrada = lines[0].split(' ') 
  const tempo_gasto_horas = Number(entrada[0])
  const vel_md = Number(entrada[1])

  const litros_por_km = 12
  const distancia = obter_distancia(vel_md, tempo_gasto_horas, litros_por_km)
  const resultado = decimal(distancia, 3)

  exibir(resultado)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function decimal(n, casas) {
  return n.toFixed(casas)
}

function obter_distancia(vel_md, tempo_gasto_horas, litros_por_km) {
    return (vel_md * tempo_gasto_horas) / litros_por_km

}

main()

function exibir(conteudo) {
  console.log(conteudo)
}

function decimal(n, casas) {
  return n.toFixed(casas)
}

function obter_distancia(vel_md, tempo_gasto_horas, litros_por_km) {
    return (vel_md * tempo_gasto_horas) / litros_por_km

}

main()
