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