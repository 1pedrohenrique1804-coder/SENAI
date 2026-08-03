const celular = {
    marca: "Ponbo",
    modelo: "Ponbo Pruh MAX",
    ano: 2030,
    cor: "Ponbo Prata"
};

for (let chave in celular) {
    console.log(`${chave}: ${celular[chave]}`);
}