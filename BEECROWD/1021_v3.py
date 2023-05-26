

cedula = float(input())

cem = cinquenta = vinte = dez = cinco = dois = um = 0
moedas_cinquenta = moedas_vinte_cinco = moedas_dez = moedas_cinco = moedas_dois = moedas_um = 0

cedula = float(f'{cedula:.2f}')
print([1], cedula)
print([2], cedula / 100)
if int(cedula / 100) >= 1:
    cem = int(cedula / 100)
    print([3], cem)
    cedula -= cem * 100
    print([4], cedula)

cedula = float(f'{cedula:.2f}')
if int(cedula / 50) >= 1:
    cinquenta = int(cedula / 50)
    cedula -= cinquenta * 50

cedula = float(f'{cedula:.2f}')
if int(cedula / 20) >= 1:
    vinte = int(cedula / 20)
    cedula -= vinte * 20

cedula = float(f'{cedula:.2f}')
if int(cedula / 10) >= 1:
    dez = int(cedula / 10)
    cedula -= dez * 10

cedula = float(f'{cedula:.2f}')
if int(cedula / 5) >= 1:
    cinco = int(cedula / 5)
    cedula -= cinco * 5

cedula = float(f'{cedula:.2f}')
if int(cedula / 2) >= 1:
    dois = int(cedula / 2)
    cedula -= dois * 2

cedula = float(f'{cedula:.2f}')
if int(cedula / 1) >= 1:
    um = int(cedula / 1)
    cedula -= um * 1

cedula = float(f'{cedula:.2f}')
if int(cedula / 0.50) >= 1:
    moedas_cinquenta = int(cedula / 0.50)
    cedula -= moedas_cinquenta * 0.50

cedula = float(f'{cedula:.2f}')
if int(cedula / 0.25) >= 1:
    moedas_vinte_cinco = int(cedula / 0.25)
    cedula -= moedas_vinte_cinco * 0.25

cedula = float(f'{cedula:.2f}')
if int(cedula / 0.10) >= 1:
    moedas_dez = int(cedula / 0.10)
    cedula -= moedas_dez * 0.10

cedula = float(f'{cedula:.2f}')
if int(cedula / 0.05) >= 1:
    moedas_cinco = int(cedula / 0.05)
    cedula -= moedas_cinco * 0.05

cedula = float(f'{cedula:.2f}')
if int(cedula / 0.02) >= 1:
    moedas_dois = int(cedula / 0.02)
    cedula -= moedas_dois * 0.02

cedula = float(f'{cedula:.2f}')
if int(cedula / 0.01) >= 1:
    moedas_um = int(cedula / 0.01)
    cedula -= moedas_um * 0.01
