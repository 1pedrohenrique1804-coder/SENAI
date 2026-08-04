let filmes = [
    { titulo: 'Matrix', ano: 1999, genero: 'Ficção' },
    { titulo: 'Interestelar', ano: 2014, genero: 'Ficção' },
    { titulo: 'Titanic', ano: 1997, genero: 'Romance' },
    { titulo: 'Avatar', ano: 2009, genero: 'Ficção' },
    { titulo: 'Coringa', ano: 2019, genero: 'Drama' }
];

let titulos = filmes.map(function(filme) {
    return filme.titulo;
});

console.log(titulos);

let ficcao = filmes.filter(function(filme) {
    return filme.genero === 'Ficção';
});

console.log(ficcao);

let filme = filmes.find(function(filme) {
    return filme.ano === 1997;
});

console.log(filme);

let film = filmes
    .filter(function(filme) {
        return filme.ano > 2000;
    })
    .map(function(filme) {
        return filme.titulo;
    });

console.log(film);