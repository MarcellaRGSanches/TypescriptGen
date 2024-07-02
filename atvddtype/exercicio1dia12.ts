import { Queue } from "../interface/Queue";
import readlinesync = require("readline-sync");
const lista = new Queue<string>();

let codigo: number;
let nomeCliente: string;
do {
    console.log("\n   ****MENU****   ");
    console.log("1: Adicionar um novo Cliente na fila.");
    console.log("2: Listar todos os Clientes na fila");
    console.log("3: Retirar uma pessoa da fila");
    console.log("0: O programa deve ser finalizado. ");

    codigo = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch (codigo) {
        case 1:
            nomeCliente = readlinesync.question("Insira o nome do cliente: ");
            lista.enqueue(nomeCliente);
            // lista.printQueue();
            console.log("Cliente Adicionado!");
            break;
        case 2:
            if (!lista.isEmpty()) {
                console.log(`\nLista: \n`);
                lista.printQueue();
            } else {
                console.log("A fila esta vazia!");
            }
            break;
        case 3:
            if (!lista.isEmpty()) {
                lista.dequeue();
                lista.printQueue();
                console.log("Cliente retirado!");
            } else {
                console.log("A fila esta vazia!");
            }
            break;
        case 0:
            console.log("Programa finalizado!\nMuito obrigado!");
            break;
        default:
            break;
    }
} while (codigo !== 0)



//1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
//2: Listar todos os Clientes na fila
//3: Chamar (retirar) uma pessoa da fila
//0: O programa deve ser finalizado. 
