const frutas: Set<string> = new Set<string>(); //a collection set não aceita dados repetidos, então no console table o caqui vai aparecer uma vez só

frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");
console.table(frutas);

console.log(`\nA fruta Caqui existe? ${frutas.has("Caqui")}`);// esse metodo vai verificar se (no caso) a fruta existe dentro da lista 
 frutas.delete("Caqui"); // vai deletar o elemento da lista, no caso como tem dois caquis, ele vai eliminar os dois! 
 console.table(frutas);
