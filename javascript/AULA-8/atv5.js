let produtos = [
    {id:1, nome:"Fone", preco:59, categoria:"Eletrônico"},
    {id:2, nome:"Geladeira", preco:2599, categoria:"Eletro"},
    {id:3, nome:"Mouse", preco:109, categoria:"Informatica"},
    {id:4, nome:"Teclado", preco:299, categoria:"Informatica"},
    {id:5, nome:"Fogão", preco:599, categoria:"Eletro"}
]

let nomes = produtos.map(function(item){
    return item.nome
});

console.log(nomes);

let eletro = produtos.filter(function(item){
    return item.categoria === "Eletro"
});

console.log(eletro);

let encontrados = produtos.find(function(item){
    return item.id === 3
});

console.log(encontrados);

let nomeMaior = produtos.filter(function(item){
    return item.preco > 500
}).map(function(item){
    return item.nome
});

console.log(nomeMaior);
