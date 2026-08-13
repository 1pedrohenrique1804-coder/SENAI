const botao = document.getElementById("btnToggle");
const paragrafo = document.getElementById("paragrafo");

botao.addEventListener("click", function () {
    paragrafo.classList.toggle("oculto");
});