const caixa = document.getElementById("caixa");

document.getElementById("ativar").addEventListener("click", function () {
    caixa.classList.add("ativo");
});

document.getElementById("desativar").addEventListener("click", function () {
    caixa.classList.remove("ativo");
});

document.getElementById("verificar").addEventListener("click", function () {
    alert(caixa.classList.contains("ativo"));
});
