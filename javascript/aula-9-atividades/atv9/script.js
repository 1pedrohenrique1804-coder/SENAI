const botao = document.getElementById("btnEstilo");

botao.addEventListener("click", function () {
    const caixa = document.getElementById("caixa");

    caixa.style.backgroundColor = "yellow";
    caixa.style.border = "2px solid black";
    caixa.style.padding = "20px";
});