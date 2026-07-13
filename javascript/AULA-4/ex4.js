const filmes = [
    {
        titulo: "Pombo Sem AURA",
        ano: 3000,
        genero: "Roube um BrainRot"
    },
    {
        titulo: "Farmadores de Aura Senai",
        ano: 2026,
        genero: "Baseado em Fatos Reais"
    },
    {
        titulo: "João Mega Brain",
        ano: 2000,
        genero: "Tecnologia"
    }
];

filmes.forEach(filme => {
    console.log(`${filme.titulo} - ${filme.ano} - ${filme.genero}`);
});