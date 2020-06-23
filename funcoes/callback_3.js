// const nums = [1, 2, 3, 4, 5]
// const dobro = n => n * 2
// console.log(nums.map(dobro))


// const nums = [1, 2, 3, 4, 5]
// const dobro = (n, i) => n * 2 + i
// console.log(nums.map(dobro))


// const nums = [1, 2, 3, 4, 5]
// const dobro = (n, i, a) => n * 2 + i + a.length
// console.log(nums.map(dobro))


// Map com strings
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)


const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99},
  { nome: 'Impressora', qtde: 0, preco: 649.50},
  { nome: 'Caderno', qtde: 4, preco: 27.10},
  { nome: 'Lapis', qtde: 3, preco: 5.82},
  { nome: 'Tesouro', qtde: 1, preco: 19.20},
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))