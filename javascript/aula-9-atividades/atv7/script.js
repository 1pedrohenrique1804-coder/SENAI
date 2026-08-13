const botao = document.getElementById("btnInserir");

botao.addEventListener("click", function () {
    document.getElementById("conteudo").innerHTML =
        "<strong>Negrito</strong> e <em>Itálico</em>";
});