const btn = document.querySelector('#btnAcao')
const inf = document.querySelector("#infoBotao")

btn.addEventListener("click", function(){
    inf.textContent = btn.textContent
})