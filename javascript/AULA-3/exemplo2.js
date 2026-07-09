let cidades = ["São José", "Palhoça", "Biguaçu", "Floripa", "Santo Amaro"]

console.log(cidades[0])
console.log(cidades[2])
console.log(cidades[cidades.length -1])

cidades.push("Balneário")

cidades.forEach(function(item, indice) {
  console.log(`${indice}: ${item}`);
});
