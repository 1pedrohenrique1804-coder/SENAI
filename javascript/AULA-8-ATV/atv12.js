 let usuarios = [
    {id: 1, nome: 'João'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'Pedro'}
]

let pessoa = usuarios.find(function(item){
    return item.id === 2
});

console.log(pessoa);