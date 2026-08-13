const texto = document.getElementById("texto");

document.getElementById("vermelho").addEventListener("click", function () {
    texto.style.color = "red";
});

document.getElementById("azul").addEventListener("click", function () {
    texto.style.color = "blue";
});

document.getElementById("verde").addEventListener("click", function () {
    texto.style.color = "green";
});