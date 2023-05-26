

class Ship:

    def __init__(self):
        self.container = self.entrada_txt()
        self.navio = self.entrada_txt()
        self.container_int = self.cada_indice_inteiro(self.container)
        self.navio_int = self.cada_indice_inteiro(self.navio)

        if self.eh_maior_igual(self.navio_int[0], self.container_int[0]) \
           and self.eh_maior_igual(self.navio_int[1], self.container_int[1]) \
           and self.eh_maior_igual(self.navio_int[2], self.container_int[2]):

            self.qtd_container = self.calcular_proporcao(self.navio_int, self.container_int)
            print(self.qtd_container)
        else:
            print(0)

    @staticmethod
    def entrada_txt():
        entrada = input().split(' ')
        return entrada

    @staticmethod
    def cada_indice_inteiro(iteravel):
        novo = []
        for i in iteravel:
            novo.append(int(i))
        return novo

    @staticmethod
    def eh_maior_igual(alvo, ref):
        return alvo >= ref

    @staticmethod
    def calcular_proporcao(a, b):
        novo = []

        calculo = 1
        for i in range(len(a)):
            novo.append(a[i] // b[i])

        for i in range(len(novo)):
            calculo *= novo[i]

        return calculo


ship = Ship()
