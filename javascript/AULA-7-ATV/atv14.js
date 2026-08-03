let mensagem = "global";

function testarEscopo() {
  let mensagem = "local";
  console.log(mensagem);
}
testarEscopo();
console.log(mensagem);