

# n = 3.14159
# raio = float(input())
# area = raio ** 2 * n
# print(f'A={area:.4f}')

# A = int(input())
# B = int(input())
# SOMA = A + B
# print(f'SOMA = {SOMA}')

# A = int(input())
# B = int(input())
# PROD = A * B
# print(f'PROD = {PROD}')

# A = float(input())
# B = float(input())
# MEDIA = (A * 3.5 + B * 7.5) / (3.5 + 7.5)
# print(f'MEDIA = {MEDIA:.5f}')

# A = float(input())
# B = float(input())
# C = float(input())
# MEDIA = (A * 2 + B * 3 + C * 5) / (2 + 3 + 5)
# print(f'MEDIA = {MEDIA:.1f}')

# A = int(input('-> '))
# B = int(input('-> '))
# C = int(input('-> '))
# D = int(input('-> '))
# DIFERENCA = (A * B - C * D)
# print(f'DIFERENCA = {DIFERENCA}')

# FUNCIONARIO_ID = int(input())
# HORAS_TRABALHADAS = int(input())
# VALOR_HORA = float(input())
# SALARIO = HORAS_TRABALHADAS * VALOR_HORA
# print(f'NUMBER = {FUNCIONARIO_ID}')
# print(f'SALARY = U$ {SALARIO:.2f}')

# FUNCIONARIO_NOME = input('Nome: ')
# SALARIO = float(input('Salário: '))
# MONTANTE = float(input('Montante: '))
# BONUS = MONTANTE * (15/100)
# RESULTADO = SALARIO + BONUS
# print(f'TOTAL = R$ {RESULTADO:.2f}')

# produto = input()
# produto2 = input()
# produto1_dados = produto.split()
# produto2_dados = produto2.split()
# qt_p1, preco_p1 = float(produto1_dados[1]), float(produto1_dados[2])
# qt_p2, preco_p2 = float(produto2_dados[1]), float(produto2_dados[2])
# total_p1 = qt_p1 * preco_p1
# total_p2 = qt_p2 * preco_p2
# total = total_p1 + total_p2
# print(f'VALOR A PAGAR: R$ {total:.2f}')

# raio = float(input())
# item_a = 4/3
# pi = 3.14159
# calculo = item_a * pi * raio ** 3
# print(f'VOLUME = {calculo:.3f}')

# a = 7
# b = 14
# c = 106
# def obter_maior(n1, n2):
#     return (n1 + n2 + abs(n1 - n2)) / 2

# def exibir(conteudo):
#     print(conteudo)

# def main():
    
#     entrada = input().split()
    
#     a = int(entrada[0])
#     b = int(entrada[1])
#     c = int(entrada[2])

#     ab = obter_maior(a, b)
#     abc = obter_maior(ab, c)
#     exibir(f'{int(abc)} eh o maior')

# main()

"""
A = input().split()
B = input().split()
print(A)
print(B)
PARTE_A = (float(B[0]) - float(A[0])) ** 2
PARTE_B = (float(B[1]) - float(A[1])) ** 2
VALOR_PRINCIPAL = PARTE_A + PARTE_B
CONTADOR = VALOR_PRINCIPAL / 2

while abs(CONTADOR ** 2 - VALOR_PRINCIPAL) > 0.00001:
    CONTADOR = (CONTADOR + VALOR_PRINCIPAL/CONTADOR) / 2

print(f'{CONTADOR:.4f}')
"""

def distribute_money(amount):
    denominations = {
        100: 'cem', 
        50: 'cinquenta', 
        20: 'vinte', 
        10: 'dez', 
        5: 'cinco', 
        2: 'dois', 
        1: 'um', 
        0.5: 'cinquenta centavos', 
        0.25: 'vinte e cinco centavos', 
        0.1: 'dez centavos', 
        0.05: 'cinco centavos',  
        0.01: 'um centavo'
    }
    distribution = {}
    for denom in sorted(denominations.keys(), reverse=True):
        print(denom)
        if denom >= 1:
            num_bills = int(amount // denom)
            distribution[denominations[denom]] = num_bills
            amount -= num_bills * denom
        else:
            num_coins = int(amount / denom + 0.001)  # To avoid floating point errors
            distribution[denominations[denom]] = num_coins
            amount -= num_coins * denom
    return distribution

print(distribute_money(576.73).values())





















"""
Fiddlesticks é um campeão do jogo League of Legends e tem como sua 
habilidade ultimate a "Tempestade de Corvos", ela funciona da seguinte 
maneira:

Primeiro Fiddlesticks escolhe um local estratégico e prontamente ele se 
prepara para ressurgir em uma direção até uma certa distância, então ele se
enraiza e canaliza a ultimate por exatamente 1.5 segundos, após esse tempo 
ele ressurge imediatamente no local alvo com uma revoada de corvos voando ao
seu redor e causando muito dano.

Fiddlesticks quer sua ajuda para saber se de uma certa posição é possível 
atingir um invasor com sua habilidade ultimate.

Obs: Considere que Fiddlesticks sempre luta exatamente na direção do invasor
e o invasor sempre tenta fugir na direção contrária a Fiddlesticks, em 
velocidade constante.

Entrada
A entrada é composta de várias linhas, cada linha contém os seguintes valores
inteiros: Xf, Yf, Xi, Yi, Vi, R1 e R2(0 ≤ Xf, Yf, Xi, Yi, Vi, R1 e R2 ≤ 100)
, representando respectivamente as coordenadas de Fiddlesticks, as coordenadas
iniciais do invasor, a velocidade do invasor, o raio de conjuração da 
ultimate e o raio de voo dos corvos. Considere a unidade de medida como sendo
o metro.

Saída
Na saída você deve imprimir para cada linha o caractere 'Y' caso seja possível 
atingir o invasor ou 'N' caso contrário, ambos seguidos de uma quebra de linha.
"""

# FIDDLESTICKS = '4 6 22 6 0 16 2'
# FIDDLESTICKS = input()
# CONTADOR = 0

# for i, char in enumerate(FIDDLESTICKS.split(' ')):
#     zero_cima = int(char) >= 0
#     cem_abaixo = int(char) <= 100
#     ambas = zero_cima and cem_abaixo
#     if char == FIDDLESTICKS[-1]:
#         if not ambas:
#             CONTADOR += 1
#     else:
#         if not zero_cima:
#             CONTADOR += 1

# if CONTADOR == 0:
#     print('Y')
# else:
#     print('N')
