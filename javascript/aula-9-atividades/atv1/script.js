const titulo = document.querySelector("h1")
const bntn = document.querySelector("button")
const resultado = document.querySelector("#resultado")

bntn.addEventListener("click", function(){
    resultado.textContent = titulo.textContent
})