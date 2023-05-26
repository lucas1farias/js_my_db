

/*
Dados dois círculos, um desenhado por um ambicioso caçador de flores de fogo e outro representando a área da flor, 
sua tarefa é determinar se o caçador morre ou fica rico com sua conquista.

Entrada
A entrada é composta por diversas instâncias e termina com final de arquivo (EOF). 
Cada instância consiste em uma linha com seis inteiros, 
R1 (1 ≤ R1) , X1(|X1|), Y1(|Y1|), R2 (R2 ≤ 1000), X2(|X2|), Y2 (Y2 ≤ 1000). 
O círculo desenhado pelo caçador possui raio R1 e centro (X1; Y1). 
O círculo representando a área da flor possui raio R2 e centro (X2; Y2).

Saída
Para cada instância imprima uma única linha contendo MORTO, se o caçador morre, ou RICO se o caçador consegue colher a flor.

Exemplo de Entrada: 6 -8 2 3 0 0	Exemplo de Saída: MORTO
                    7 3 4 2 4 5                     RICO
                    3 0 0 4 0 0                     MORTO
                    5 4 7 1 8 7                     RICO
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
    const cacador_raio = entrada(lines, 'int')
    const cacador_x = entrada(lines, 'int')
    const cacador_y = entrada(lines, 'int')
    const flor_raio = entrada(lines, 'int')
    const flor_x = entrada(lines, 'int')
    const flor_y = entrada(lines, 'int')

    console.log(`cacador_raio = ${cacador_raio}`)
    console.log(`cacador_x = ${cacador_x}`)
    console.log(`cacador_y = ${cacador_y}`)
    console.log(`flor_raio = ${flor_raio}`)
    console.log(`flor_x = ${flor_x}`)
    console.log(`flor_y = ${flor_y}`)
    console.log('========================================================')
    
    const distancia = obter_distancia(flor_x, cacador_x, flor_y, cacador_y)
    
    const soma_dos_raios = cacador_raio + flor_raio

    if (distancia >= soma_dos_raios) {
      console.log("RICO", distancia, soma_dos_raios)
    }
    else if (distancia < soma_dos_raios) {
      console.log("MORTO", distancia, soma_dos_raios)
    }
    
    console.log(distancia)
    console.log(circunferencia(cacador_raio))
    console.log(circunferencia(flor_raio))
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

function obter_area_circulo(raio) {
  return Math.PI * (raio ** 2)
}

function obter_distancia(xa, xb, ya, yb) {
  const centro_a = (xa - xb) ** 2
  const centro_b = (ya - yb) ** 2
  console.log('---> ', centro_a, centro_b)
  const centros_somados = centro_a + centro_b
  
  return Math.sqrt(centros_somados)
}

function circunferencia(raio) {
  return raio * (Math.PI * 2)
}

function comparar_dois(d1, d2, operador) {
  if (operador === '>') {
    return d1 > d2
  }
  else if (operador === '<') {
    return d1 < d2
  }
  else if (operador === '>=') {
    return d1 >= d2
  }
  else if (operador === '<=') {
    return d1 <= d2
  } 
  else if (operador === '!=') {
    return d1 != d2
  }
} 

main()
