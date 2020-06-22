const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

// console.log(__dirname)

function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString())
}
console.log('Ínicio da leitura assincrona...')
// fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, exibirConteudo)
// leitura assincrona com arrow function
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim da leitura assincrona...')

console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')
