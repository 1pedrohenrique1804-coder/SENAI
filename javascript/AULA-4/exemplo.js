let carros = [
    {marca:"Fiat", modelo:"Uno Quadrado"},
    {marca:"Mercedez", modelo:"Santa terezinha"},
    {marca:"Toyota", modelo:"Corolla"}
];

carros.forEach(function(carro){
    console.log(`Marca: ${carro.marca} - Modelo: ${carro.modelo}`);
});