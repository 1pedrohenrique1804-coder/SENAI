let valores = [10, 25, 8, 42, 15, 3, 30];

let resultado = valores.filter(function(item){
    return item > 15
}).map(function(item){
    return item * 3
})

console.log(resultado);