let alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 5 }
];
let aprovados = alunos.filter(function(a) {
  return a.nota >= 7;
});
console.log(aprovados); // [{nome:'Ana', nota:8}]