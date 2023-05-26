

def main():
    
    cedula = float(input())

    cedulas_de_cem = modulacao(cedula, 100, 'divisão')
    cedulas_de_cem_resto = modulacao(cedula, 100, 'modular')
    
    cedulas_de_cinquenta = modulacao(cedulas_de_cem_resto, 50, 'divisão')
    cedulas_de_cinquenta_resto = modulacao(cedulas_de_cem_resto, 50, 'modular')

    cedulas_de_vinte = modulacao(cedulas_de_cinquenta_resto, 20, 'divisão')
    cedulas_de_vinte_resto = modulacao(cedulas_de_cinquenta_resto, 20, 'modular')

    cedulas_de_dez = modulacao(cedulas_de_vinte_resto, 10, 'divisão')
    cedulas_de_dez_resto = modulacao(cedulas_de_vinte_resto, 10, 'modular')

    cedulas_de_cinco = modulacao(cedulas_de_dez_resto, 5, 'divisão')
    cedulas_de_cinco_resto = modulacao(cedulas_de_dez_resto, 5, 'modular')

    cedulas_de_dois = modulacao(cedulas_de_cinco_resto, 2, 'divisão')
    cedulas_de_dois_resto = modulacao(cedulas_de_cinco_resto, 2, 'modular')

    moedas_de_um = modulacao(cedulas_de_dois_resto, 1, 'divisão')
    moedas_de_um_resto = modulacao(cedulas_de_dois_resto, 1, 'modular')

    moedas_de_cinquenta = modulacao(moedas_de_um_resto, 0.50, 'divisão')
    moedas_de_cinquenta_resto = modulacao(moedas_de_um_resto, 0.50, 'modular')

    moedas_de_vinte_cinco = modulacao(moedas_de_cinquenta_resto, 0.25, 'divisão')
    moedas_de_vinte_cinco_resto = modulacao(moedas_de_cinquenta_resto, 0.25, 'modular')

    moedas_de_dez = modulacao(moedas_de_vinte_cinco_resto, 0.10, 'divisão')
    moedas_de_dez_resto = modulacao(moedas_de_vinte_cinco_resto, 0.10, 'modular')

    moedas_de_cinco = modulacao(moedas_de_dez_resto, 0.05, 'divisão')
    moedas_de_cinco_resto = modulacao(moedas_de_dez_resto, 0.05, 'modular')

    moedas_de_um_cent = modulacao(moedas_de_cinco_resto, 0.01, 'divisão')
    
    print('NOTAS:')
    print(f'{cedulas_de_cem} nota(s) de R$ 100.00')
    print(f'{cedulas_de_cinquenta} nota(s) de R$ 50.00')
    print(f'{cedulas_de_vinte} nota(s) de R$ 20.00')
    print(f'{cedulas_de_dez} nota(s) de R$ 10.00')
    print(f'{cedulas_de_cinco} nota(s) de R$ 5.00')
    print(f'{cedulas_de_dois} nota(s) de R$ 2.00')
    print('MOEDAS:')
    print(f'{moedas_de_um} moeda(s) de R$ 1.00')
    print(f'{moedas_de_cinquenta} moeda(s) de R$ 0.50')
    print(f'{moedas_de_vinte_cinco} moeda(s) de R$ 0.25')
    print(f'{moedas_de_dez} moeda(s) de R$ 0.10')
    print(f'{moedas_de_cinco} moeda(s) de R$ 0.05')
    print(f'{moedas_de_um_cent} moeda(s) de R$ 0.01')

def modulacao(valor, modular, operacao):
    if operacao == 'divisão': 
      return int(valor / modular)
    else: 
      return valor % modular

main()
