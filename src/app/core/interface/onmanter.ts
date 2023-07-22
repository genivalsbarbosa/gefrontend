import { Entidade } from './../class/entidade';
export interface OnManter {        
    salvar(): void;   
    salvarCriarNovo(): void;
    incluir(entidade: Entidade, novo: boolean): void;
    alterar(entidade: Entidade, novo: boolean): void;
    voltar(): void;
    limpar(): void;
}