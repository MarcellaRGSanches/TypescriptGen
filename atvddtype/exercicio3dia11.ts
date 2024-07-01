import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>();

numeros.add(readlinesync.questionInt("\nDigite um numero: "));
numeros.add(readlinesync.questionInt("\nDigite um numero: "));
numeros.add(readlinesync.questionInt("\nDigite um numero: "));
numeros.add(readlinesync.questionInt("\nDigite um numero: "));
numeros.add(readlinesync.questionInt("\nDigite um numero: "));
numeros.add(readlinesync.questionInt("\nDigite um numero: "));
numeros.add(readlinesync.questionInt("\nDigite um numero: "));
numeros.add(readlinesync.questionInt("\nDigite um numero: "));
numeros.add(readlinesync.questionInt("\nDigite um numero: "));
numeros.add(readlinesync.questionInt("\nDigite um numero: "));

console.table(numeros);
// console.log(numeros.values());


// OU ******************
// const listaNumeros: <number> = new Set<number>();
// for(let i = 0; i < 10; i++){
//     let numero = readlinesync.questionInt(`Digite${i + 1}numero inteiro: `);
//     listaNumeros.add(numero);
// }
// console.log("lista de dados do set: ");
// listaNumeros.forEach(numero => console.log(numero))

