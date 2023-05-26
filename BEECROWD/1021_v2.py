

def main():
    cedula = float(input())
    
    cedulas_de_cem = distribuir_cedula(cedula, 100)
    cedula = reduzir(cedula, cedulas_de_cem, 100)

    cedulas_de_cinquenta = distribuir_cedula(cedula, 50)
    cedula = reduzir(cedula, cedulas_de_cinquenta, 50)

    cedulas_de_vinte = distribuir_cedula(cedula, 20)
    cedula = reduzir(cedula, cedulas_de_vinte, 20)

    cedulas_de_dez = distribuir_cedula(cedula, 10)
    cedula = reduzir(cedula, cedulas_de_dez, 10)

    cedulas_de_cinco = distribuir_cedula(cedula, 5)
    cedula = reduzir(cedula, cedulas_de_cinco, 5)

    cedulas_de_dois = distribuir_cedula(cedula, 2)
    cedula = reduzir(cedula, cedulas_de_dois, 2)

    cedulas_de_um = distribuir_cedula(cedula, 1)
    cedula = reduzir(cedula, cedulas_de_um, 1)

    moedas_cinquenta = distribuir_cedula(cedula, 0.50)
    cedula = reduzir(cedula, moedas_cinquenta, 0.50)

    moedas_vinte_cinco = distribuir_cedula(cedula, 0.25)
    cedula = reduzir(cedula, moedas_vinte_cinco, 0.25)

    moedas_dez = distribuir_cedula(cedula, 0.10)
    cedula = reduzir(cedula, moedas_dez, 0.10)

    moedas_cinco = distribuir_cedula(cedula, 0.05)
    cedula = reduzir(cedula, moedas_cinco, 0.05)

    moedas_um = distribuir_cedula(cedula, 0.01)
    cedula = reduzir(cedula, moedas_um, 0.01)

    print('NOTAS:')
    print(f'{cedulas_de_cem} nota(s) de R$ 100.00')
    print(f'{cedulas_de_cinquenta} nota(s) de R$ 50.00')
    print(f'{cedulas_de_vinte} nota(s) de R$ 20.00')
    print(f'{cedulas_de_dez} nota(s) de R$ 10.00')
    print(f'{cedulas_de_cinco} nota(s) de R$ 5.00')
    print(f'{cedulas_de_dois} nota(s) de R$ 2.00')
    print('MOEDAS:')
    print(f'{cedulas_de_um} moeda(s) de R$ 1.00')
    print(f'{moedas_cinquenta} moeda(s) de R$ 0.50')
    print(f'{moedas_vinte_cinco} moeda(s) de R$ 0.25')
    print(f'{moedas_dez} moeda(s) de R$ 0.10')
    print(f'{moedas_cinco} moeda(s) de R$ 0.05')
    print(f'{moedas_um} moeda(s) de R$ 0.01')
    

def distribuir_cedula(valor, modular):
     return int(valor // modular)

def reduzir(n_alvo, decrementador, multiplicador):
    n_alvo -= decrementador * multiplicador
    return n_alvo

main()
