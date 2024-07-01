import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>(); // o new é colocado pra definir que o array é um novo objeto

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

// numeros.push(readlinesync.questionFloat("Digite um numero: "));

numeros.unshift(2.5, 3.6, 8);

for(let numero of numeros)
    console.log(numero);

console.log(numeros);

console.log(`\n A posição do elemento 5 é: ${numeros.indexOf(5)}`);
console.log(`\n A posição do elemento 50 é: ${numeros.indexOf(50)}`);
console.log(`\n A posição do elemento 7 é: ${numeros.indexOf(7)}`);//no indexOf colocamos dentro o valor, e, ele retorna a posição(vai falar o indice onde esta armazenado)

console.log(`\nExiste no Array o elemento 5?  ${numeros.includes(5)}`);//includes- vai perguntar se um elemento existe ou não

numeros[numeros.indexOf(5)] = 10; // aqui o indexOf vai substituir o 5 pelo 10
// console.table(numeros);

numeros.splice(numeros.indexOf(10), 1); //O splice pode ser usado para remover e inserir numeros, mas aqui usando em junção com o indexOf, ele vai apagar 
// numeros.indexOf(10), 1 -- o 10 é o elemento que quero excluir e o numero 1 é a quantidade de elementos, se caso colcosse 2 ele iria excluir o numero 1 que esta embaixo do 10 
console.table(numeros);