

import { question } from "readline-sync";  // válido apenas aqui

var lines = question().split('\n') // input do Beecrowd

function main() {
  let entrada = lines[0].split(' ') // config mandatória
  const distancia = Number(entrada[0])
  const vantagem_por_min = 2
  const tempo_p_alcance = tempo_de_alcance(vantagem_por_min, distancia)
  const relatorio = `${tempo_p_alcance} minutos`
  exibir(relatorio)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function tempo_de_alcance(diferenca_por_km, diferenca_vel) {
    return diferenca_por_km * diferenca_vel
}

main()
