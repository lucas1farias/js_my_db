

def main(): 
  tempo_gasto_horas = int(input())
  vel_md = int(input())

  litros_por_km = 12
  distancia = obter_distancia(vel_md, tempo_gasto_horas, litros_por_km)
  resultado = f'{distancia:.3f}'

  exibir(resultado)

def exibir(conteudo):
  print(conteudo)

def obter_distancia(vel_md, tempo_gasto_horas, litros_por_km):
    return (vel_md * tempo_gasto_horas) / litros_por_km

main()
