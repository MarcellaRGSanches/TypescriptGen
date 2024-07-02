import readlinesync = require("readline-sync");

let numero1: number;
let numero2: number;
//ESCOPO PROGRAMA
numero1 = readlinesync.questionFloat("Digite o primeiro numero: ");
numero2 = readlinesync.questionFloat("Digite o segundo numero: ");

console.log(`\nSoma: ${numero1} + ${numero2} = ${somar(numero1, numero2)}`);
console.log(`\nSubtracao: ${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);
console.log(`\nMultipicacao: ${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);
console.log(`\nDivisao: ${numero1} / ${numero2} = ${dividir(numero1, numero2)}`);

autor();
//**** ESCOPO FUNÇÃO ****
function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}
function subtrair(numero1: number, numero2: number): number {
    return numero1 - numero2;
}
function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}
function dividir(numero1: number, numero2: number): number {
    return numero1 / numero2;
    
}
function autor(): void {
    console.log("\nFeito por Marcella Sanches!");
}
