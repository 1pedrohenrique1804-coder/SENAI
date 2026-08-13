let contador = 0;

const span = document.getElementById("contador");

document.getElementById("mais").addEventListener("click", function () {
    contador++;
    span.textContent = contador;
});

document.getElementById("menos").addEventListener("click", function () {
    contador--;
    span.textContent = contador;
});