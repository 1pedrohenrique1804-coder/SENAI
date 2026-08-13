const importante = document.querySelector(".importante")
const btn = document.querySelector("button")
const destaque = document.querySelector("#destaque")

btn.addEventListener("click", function(){
    destaque.textContent = importante.textContent;
})