let frutas = ['maçã', 'banana', 'laranja', 'uva'];

let fruta = frutas.find(function(item) {
    return item.startsWith("l");
});

console.log(fruta);