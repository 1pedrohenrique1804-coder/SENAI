const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("minhaLista");

botao.addEventListener("click", function () {
    const item = document.createElement("li");

    item.textContent = "Item " + (lista.children.length + 1);

    lista.appendChild(item);
});