let numeros = [5, 12, 8, 21, 3, 15, 7];

let pares = numeros.filter(function(item){
    return item % 2 === 0;
})

console.log(pares);