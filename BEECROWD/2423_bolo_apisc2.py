

class Bolo:
    def __init__(self):
        self.ingredientes = self.entrada_txt()
        self.ingredientes = self.cada_indice_inteiro(self.ingredientes)
        self.qtd_bolos = self.monitorar_ingredientes(self.ingredientes[0], self.ingredientes[1], self.ingredientes[2])
        print(self.qtd_bolos)
    
    @staticmethod
    def entrada_txt():
        entrada = str(input()).split(' ')
        return entrada
    
    @staticmethod
    def cada_indice_inteiro(iteravel):
        lista_de_inteiros = []
        for i in iteravel:
            lista_de_inteiros.append(int(i))
        return lista_de_inteiros
    
    @staticmethod
    def monitorar_ingredientes(a, b, c):
        farinha, ovos, leite = 2, 3, 5
        contador = 0
        
        # 4 6 9 -> 2 3 4
        while a >= farinha and b >= ovos and c >= leite:
            contador += 1
            a -= farinha
            b -= ovos
            c -= leite
        
        return contador

bolo = Bolo()
