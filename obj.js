"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class criarAluno {
    constructor(nome, idade, ra, nota1, nota2, nota3, recuperacao = 0, faltasAluno) {
        this.recuperacao = 0;
        this.faltasTotais = 25;
        this.nome = nome;
        this.idade = idade;
        this.ra = ra;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.recuperacao = recuperacao;
        this.faltasAluno = faltasAluno;
    }
    calcularMedia() {
        let notas = [this.nota1, this.nota2, this.nota3];
        if (this.recuperacao != 0) {
            let menorNota = Math.min(...notas);
            let indexMenorNota = notas.indexOf(menorNota);
            notas[indexMenorNota] = this.recuperacao;
        }
        return notas.reduce((acc, curr) => acc + curr, 0) / 3;
    }
    calcularFaltas() {
        return ((this.faltasTotais - 5) - this.faltasAluno);
    }
    verificarNotas() {
        if (this.nota1 > 10 || this.nota2 > 10 || this.nota3 > 10 || this.nota1 < 0 || this.nota2 < 0 || this.nota3 < 0 || this.recuperacao > 10 || this.recuperacao < 0) {
            return "Digite notas entre 0 e 10";
        }
        return undefined;
    }
    verificarAprovacao() {
        if (this.calcularMedia() >= 6 && this.calcularFaltas() >= 0) {
            return "Aprovado";
        }
        else if (this.calcularMedia() < 6 && this.calcularFaltas() >= 0) {
            return "Reprovado. Faça a recuperação";
        }
        else if (this.calcularMedia() >= 6 && this.calcularFaltas() <= 5) {
            return "Verifique as faltas do aluno";
        }
    }
    formularFaltas() {
        return (this.faltasAluno / this.faltasTotais) * 100;
    }
    mensagemFinal() {
        console.log(`A média do seu aluno é ${this.calcularMedia().toFixed(2)}`);
        console.log(`Seu aluno tem ${this.calcularFaltas()} aulas para faltar. Faltou ${this.faltasAluno} aulas.`);
        console.log(`Significa que a porcentagem de faltas é de ${this.formularFaltas().toFixed(2)}%`);
        console.log(`O aluno está ${this.verificarAprovacao()}`);
    }
}
exports.default = criarAluno;
