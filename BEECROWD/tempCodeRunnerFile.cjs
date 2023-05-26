let input = require("fs").readFileSync("dev/stdin", "utf8")
let lines = input.split('\r').join('').split('\n')

function main() {
  const tempo_gasto_horas = parseInt(lines.shift())
  const vel_md = parseInt(lines.shift())

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