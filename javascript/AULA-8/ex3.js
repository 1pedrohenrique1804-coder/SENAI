let numeros = [10, 25, 8, 42, 15, 3];

// Filtrar apenas maiores que 20
let maiores = numeros.filter(function(n) {
  return n > 20;
});
console.log(maiores); // [25, 42]
