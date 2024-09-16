"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const obj_1 = __importDefault(require("./obj"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// this.nome = nome;
// this.idade = idade;
// this.ra = ra;
// this.nota1 = nota1;
// this.nota2 = nota2;
// this.nota3 = nota3;
// this.recuperacao = recuperacao;
// this.faltasAluno = faltasAluno;
const aluno1 = new obj_1.default("João", 20, 123456, 8, 7, 6, 0, 0);
const aluno2 = new obj_1.default("Maria", 22, 123457, 9, 8, 7, 0, 8);
const aluno3 = new obj_1.default("Pedro", 21, 123458, 10, 9, 8, 0, 9);
const aluno4 = () => {
    return new obj_1.default(prompt("Nome: "), Number(prompt("Idade: ")), Number(prompt("RA: ")), Number(prompt("Nota 1: ")), Number(prompt("Nota 2: ")), Number(prompt("Nota 3: ")), Number(prompt("Recuperação (Se não houver, digite 0): ")), Number(prompt("Faltas: ")));
};
const novoAluno = aluno4();
novoAluno.mensagemFinal();
