// // VERSÃO DECLARATIVA
// const alunos = [/* vários alunos */]
// const aprovados = []

// for ( let i = 0; i < alunos.length; i++ ) {
//   if ( alunos[i].nota >= 7 ) {
//     aprovados.push(alunos[i])
//   }
// }


// VERSÃO FUNCIONAL
const alunos = [/* vários alunos */]
const estaAprovado = aluno => aluno.nota >= 7

const aprovados = alunos.filter(estaAprovado)
console.log(aprovados)