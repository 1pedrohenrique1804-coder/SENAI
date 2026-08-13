const botao = document.getElementById("btnAnalisar");

botao.addEventListener("click", function () {
    const titulo = document.querySelector("h2");
    const analise = document.getElementById("analise");

    analise.innerHTML =
        "texto: " + titulo.textContent + "<br>" +
        "html: " + titulo.innerHTML + "<br>" +
        "cor: " + titulo.style.color;
});