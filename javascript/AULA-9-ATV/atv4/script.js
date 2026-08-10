const btn = document.querySelector("button");
const lista = document.querySelector("#listaFrases");
const paragrafos = document.querySelectorAll("p");

btn.addEventListener("click", function(){
    paragrafos.forEach(function(item){
        let li = document.createElement("li")
        li.textContent = item.textContent
        lista.appendChild(li)
    })
})