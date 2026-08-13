const botao = document.getElementById("btnRemover");

botao.addEventListener("click", function () {
    const paragrafo = document.getElementById("removivel");

    if (paragrafo) {
        alert("Removendo o parágrafo: " + paragrafo.textContent);
        paragrafo.remove();
    }
});