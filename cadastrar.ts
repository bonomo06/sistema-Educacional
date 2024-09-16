import criarAluno from "./obj";
import promptSync from "prompt-sync";
const prompt = promptSync()


// this.nome = nome;
// this.idade = idade;
// this.ra = ra;
// this.nota1 = nota1;
// this.nota2 = nota2;
// this.nota3 = nota3;
// this.recuperacao = recuperacao;
// this.faltasAluno = faltasAluno;


const aluno1 = new criarAluno("João", 20, 123456, 8, 7, 6, 0, 0);
const aluno2 = new criarAluno("Maria", 22, 123457, 9, 8, 7, 0, 8);
const aluno3 = new criarAluno("Pedro", 21, 123458, 10, 9, 8, 0, 9);
const aluno4 = () => {
    return new criarAluno(
    prompt("Nome: "), 
    Number(prompt("Idade: ")), 
    Number(prompt("RA: ")), 
    Number(prompt("Nota 1: ")), 
    Number(prompt("Nota 2: ")), 
    Number(prompt("Nota 3: ")),
    Number(prompt("Recuperação (Se não houver, digite 0): ")),
    Number(prompt("Faltas: "))
    );
}

const novoAluno = aluno4();

novoAluno.mensagemFinal();
