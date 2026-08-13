// Busca Binária — requer lista ordenada
function buscaBinaria(array, alvo) {
  let esquerda = 0;
  let direita = array.length - 1;

  while (esquerda <= direita) {
    let meio = Math.floor((esquerda + direita) / 2);
    if (array[meio] === alvo) {
      return meio; // encontrou!
    } else if (array[meio] < alvo) {
      esquerda = meio + 1; // busca na direita
    } else {
      direita = meio - 1; // busca na esquerda
    }
  }
  return -1; // não encontrado
}

// Exemplo de uso (lista ORDENADA)
let numeros = [2, 5, 8, 12, 17, 23, 30, 42, 55];
console.log(buscaBinaria(numeros, 17)); // 4 (índice do 17)
console.log(buscaBinaria(numeros, 10)); // -1 (não existe)