let contatos = [
    {id:1, nome:"Pedro"},
    {id:2, nome:"Igor"}
]

let encontrado = contatos.find(function(item){
    return item.id === 2
});

console.log(encontrado);