let palavras = ['sol', 'montanha', 'lua', 'estrela', 'mar'];

let grande = palavras.filter(function(item) {
    return item.length > 3;
});

console.log(grande);
