import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat("Digite o primeiro numero: ");
numero2 = readlinesync.questionFloat("Digite o segundo numero: ");

console.log(`\nSoma: ${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`\nSubtracao: ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`\nMultipicacao: ${numero1} * ${numero2} = ${numero1 * numero2}`);
console.log(`\nDivisao: ${numero1} / ${numero2} = ${numero1 / numero2}`);