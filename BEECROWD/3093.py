

def main():
  n_testes = entrada_num()
  lines = []

  for i in range(n_testes):
      cartas = entrada_txt()
      lines.append(cartas)

  iterar_sobre(lines, vai_ganhar_pontos, 'Aaah muleke', 'Ooo raca viu')

def entrada_txt():
    entrada = input()
    return entrada

def entrada_num():
    entrada = int(input())
    return entrada

def criar_lista(alvo, parada):
    array = []
    for i in range(parada):
        array.append(alvo[i])
    return array

def exibir(txt):
    print(txt)

def iterar_sobre(alvo, funcao, msg_sucesso, msg_falha):
  for i in alvo:
    if i == '':
        print('')
    else:
        print(msg_sucesso if funcao(i) else msg_falha)
  
def vai_ganhar_pontos(alvo):
    contador = 0
    for i in alvo:
      if i == 'Q':
          contador += 1
      elif i == 'J': 
          contador += 1
      elif i == 'K': 
          contador += 1
      elif i == 'A': 
          contador += 1
    
    return True if contador >= 4 else False

main()
