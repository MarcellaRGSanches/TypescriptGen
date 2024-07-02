import readlinesync = require("readline-sync");
import { Stack } from "../interface/Stack";
const lista = new Stack<string>();
let codigo: number;
let nomeLivro: string;

do {
    console.log("\n   ****MENU****   ");
    console.log("1: Adicionar um novo livro para a pilha.");
    console.log("2: Listar todos os livros da pilha");
    console.log("3: Retirar um livro da pilha");
    console.log("0: O programa deve ser finalizado. ");

    codigo = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch (codigo) {
        case 1:
            nomeLivro = readlinesync.question("Insira o nome do livro: ");
            lista.push(nomeLivro);
            console.log("Livro Adicionado!");

            break;
        case 2:
            if (!lista.isEmpty()) {
                console.log(`\nLista: \n`);
                lista.printStack();
            }else {
                console.log("A pilha esta vazia!");
            }
            break;

        case 3:
            if (!lista.isEmpty()) {
                lista.pop();
                lista.printStack();
                console.log("Livro retirado!");
            }else {
                console.log("A pilha esta vazia!");
            }
            break;
        case 0:
            console.log("Programa finalizado!\nMuito obrigado!");
            break;
        default:
            break;
    }
} while (codigo !== 0)
