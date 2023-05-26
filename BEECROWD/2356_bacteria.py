

def entrada_txt():
    entrada = input()
    return entrada

def main():
    dna = entrada_txt()
    sequencia = entrada_txt()
    if sequencia in dna:
        print('Resistente')
    else:
        print('Nao resistente')

main()
