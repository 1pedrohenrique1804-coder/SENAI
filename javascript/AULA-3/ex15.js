let compras = [];

compras.push('Escravo reverso');
compras.push('Roube BrainRot');
compras.push('Pão Que o Diabo Amassou');
compras.push('Leite Grosso');
compras.push('Velho');

console.log("lista de compras:");
compras.forEach(function(item, indice) {
    console.log((indice + 1) + " - " + item);
});

console.log("tem Leite Grosso?", compras.includes('Leite Grosso'));

let itemRemovido = compras.pop();
console.log("item tirado", itemRemovido);

console.log("update da lista");
compras.forEach(function(item, indice) {
    console.log((indice + 1) + " - " + item);
});

console.log("total de coisas:", compras.length);