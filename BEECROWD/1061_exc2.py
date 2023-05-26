

dia_inicial = 5
dia_final = 9
data_inicial = [8, 12, 23]
data_final = [6, 13, 23]

tempo_inicio = data_inicial[2] + (data_inicial[1] * 60) + (data_inicial[0] * 60 * 60) + dia_inicial * 24 * 60 * 60
tempo_fim = data_final[2] + (data_final[1] * 60) + (data_final[0] * 60 * 60) + dia_final * 24 * 60 * 60

# print(f'Total de segundos da data de inicio: {tempo_inicio}')
# print(f'Total de segundos da data de fim: {tempo_fim}')

tempo_corrido_seg = tempo_fim - tempo_inicio
# print(f'Subtracao dos segundos das duas datas: {tempo_corrido_seg}')

dia = tempo_corrido_seg // (24 * 60 * 60)
print(tempo_corrido_seg)
tempo_corrido_seg = tempo_corrido_seg % (24 * 60 * 60)
print(tempo_corrido_seg)
# print(f'Reversao de segundos p/ dias: {dia}')
# print(f'Segundos apos a exclusao da parte dos dias: {tempo_corrido_seg}')

hora = tempo_corrido_seg // (60 * 60)
tempo_corrido_seg = tempo_corrido_seg % (60 * 60)
# print(f'Reversao de segundos p/ horas: {dia}')
# print(f'Segundos apos a exclusao da parte das horas: {tempo_corrido_seg}')

min = tempo_corrido_seg // 60
tempo_corrido_seg = tempo_corrido_seg % 60

seg = tempo_corrido_seg


# print(f'{dia} dia(s)')
# print(f'{hora} hora(s)')
# print(f'{min} minuto(s)')
# print(f'{seg} segundo(s)')
