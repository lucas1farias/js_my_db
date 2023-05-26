

/* 
TIPO 1: import * as nome_para_o_documento_importado from "caminho/arquivo.extensão"
TIPO 2: import {nome_função, nome_outra_funcao} from "caminho/arquivo.extensão"

OBS: 
    ARQUIVOS ENVOLVIDOS DEVEM TER EXTENSÃO: .mjs
    ARQUIVOS QUE SÃO IMPORTADOS, SE USAM FUNÇÕES, UTILIZAR A SINTAXE: export 
*/

// import {exibir, tornar_lista} from "./funcoes_mock.mjs"
// exibir('Python')
// const linguagem = tornar_lista('Javascript é uma linguagem', ' ')
// exibir(linguagem)

import * as def from "./funcoes_mock.mjs"
def.exibir('Python')
const linguagem = def.tornar_lista('Javascript é uma linguagem', ' ')
def.exibir(linguagem)
