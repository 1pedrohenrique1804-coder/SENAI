const input = document.getElementById("tarefaInput");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", function () {

    if (input.value.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li");
    item.textContent = input.value;

    item.addEventListener("click", function () {
        alert("Tarefa concluída: " + item.textContent);
        item.remove();
    });

    lista.appendChild(item);

    input.value = "";
});