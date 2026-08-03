let alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 6 }
];
let nomes = alunos.map(function(a) {
  return a.nome;
});
console.log(nomes); // ['Ana', 'Bruno']