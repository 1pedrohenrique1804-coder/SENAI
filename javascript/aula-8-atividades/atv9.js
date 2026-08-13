let produtos = [
    {nome: 'Mouse', preco: 50},
    {nome: 'Teclado', preco: 120},
    {nome: 'Monitor', preco: 800}
];

let valor = produtos.filter(function(item){
    return item.preco > 60
})

console.log(valor);