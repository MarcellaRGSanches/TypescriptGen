import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

cores.push(readlinesync.question("Digite uma cor: "));
cores.push(readlinesync.question("Digite uma cor: "));
cores.push(readlinesync.question("Digite uma cor: "));
cores.push(readlinesync.question("Digite uma cor: "));
cores.push(readlinesync.question("Digite uma cor: "));

console.table(cores);

console.table(cores.sort());