const botao = document.getElementById("btnAlterar");

botao.addEventListener("click", function () {
    document.querySelector("h1").textContent =
        "Título Modificado com Sucesso!";
});