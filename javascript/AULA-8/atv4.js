let numeros = [5, 12, 8, 21, 3, 15];

let final = numeros.filter(function(item){
    return item > 10
}).map(function(item){
    return item * 2
});

console.log(final);