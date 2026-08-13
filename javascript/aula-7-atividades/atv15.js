const soma = (a, b) => a + b;
const menos = (a, b) => a - b;
const vezes = (a, b) => a * b;
const dividir = (a, b) => {
  if (b === 0) {
    return "erro: divisao por zero";
  }
  return a / b;
};

console.log("soma", soma(10, 5));
console.log("subtração", menos(20, 8));
console.log("multiplicação", vezes(6, 7));
console.log("divisão", dividir(30, 6));
console.log("divisão por zero", dividir(10, 0));  