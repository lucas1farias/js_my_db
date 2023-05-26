

/*
Em um país imaginário denominado Lisarb, todos os habitantes ficam felizes em pagar seus impostos, 
pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em benefício da população, 
sem qualquer desvio. A moeda deste país é o Rombus, cujo símbolo é o R$.

Leia um valor com duas casas decimais, equivalente ao salário de uma pessoa de Lisarb. 
Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.

Renda                           Imposto de Renda
de 0.00 a R$ 2000.00            Isento
de R$ 2000.01 até R$ 3000.00    8%
de R$ 3000.01 até R$ 4500.00    18%
acima de R$ 4500.00             28%

Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas __sobre R$ 1000.00, 
pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. 

===== EXEMPLO =====
No exemplo fornecido (abaixo), 
.... a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. 
O valor deve ser impresso com duas casas decimais.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto de Renda, com duas casas após o ponto. 
Se o valor de entrada for menor ou igual a 2000, deverá ser impressa a mensagem "Isento".

Exemplos de Entrada	Exemplos de Saída
3002.00             R$ 80.36
1701.12             Isento
4520.00             R$ 355.60
*/

/*
  O cálculo segue duas lógicas
  1. No RANGE onde o valor entra, o cálculo da etapa 1 começa com a subtração dos RANGES anteriores e sua taxa
  2. Na etapa 2 do cálculo, o cálculo acontece no escopo, pela != do valor pelo RANGE anterior maior e sua taxa
  3. Pela lógica, quando o valor está no escopo 1, o cálculo não pode ser completo
  3. Pois a subtração dos RANGES anteriores seria 2000, que é maior do que as dos suscessores (sem sentido)
  4. Por isso, no escopo 1, só se calcula a segunda etapa do cálculo, provavelmente pelo RANGE menor
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

function main() {
  const salario = entrada(lines, 'float')
  const imposto = calcular_imposto_renda(salario)
  const resultado = `${imposto === null ? 'Isento' : `R$ ${imposto}`}`

  exibir(resultado)
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

function numero_entre(ref, min, max) {
  return ref >= min && ref <= max
} 

function decimal(num, casas) {
  return parseFloat(num).toFixed(casas)
}

function calcular_imposto_renda(salario) {
  const taxas = [8/100, 18/100, 28/100]
  const valores = [2000, 3000, 4500]
  const taxa_menor = valores[1] - valores[0]
  const taxa_media = valores[2] - valores[1]
  let diferenca = 0
  let calculo_etapa_a = 0
  let imposto = 0

  if (numero_entre(salario, 0, 2000.00)) {
    return null
  } 
  
  else if (numero_entre(salario, 2000.01, 3000.00)) {
    imposto = (salario - valores[0]) * taxas[0]
  } 
  
  else if (numero_entre(salario, 3000.01, 4500.00)) {
    calculo_etapa_a = taxa_menor * taxas[0]
    diferenca = (salario - valores[1]) * taxas[1]
    imposto = calculo_etapa_a + diferenca
  } 
  
  else if (salario > 4500.00) {
    let etapa_anterior_a = taxa_menor * (taxas[0])
    
    calculo_etapa_a = taxa_media * (taxas[1])
    diferenca = (salario - valores[2]) * taxas[2]
    imposto = etapa_anterior_a + calculo_etapa_a + diferenca
  } 
  
  return decimal(imposto, 2)
}

main()