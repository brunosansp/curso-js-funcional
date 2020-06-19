// arrow function
const felizNatal = () => console.log(`Feliz Natal!!!`)
felizNatal()

const saudacao = nome => `Fala ${nome}, blz?!?`
console.log(saudacao('Maria'))

// segundo exemplo
// const somar = numeros => {
//   let total = 0
//   for(let n of numeros) {
//     total += n
//   }
//   return total
// }
// console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// somando numeos com arrow function e operador rest (...blablabla)
const somar = (...numeros) => {
  // console.log(Array.isArray(numeros))
  let total = 0
  for(let n of numeros) {
    total += n
  }
  return total
}
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


// // potencia com arrow function
// const potencia = (base) => {
//   return function(exp) {
//     return Math.pow(base, exp)
//   }
// }
// console.log(potencia(2)(8))


// // ou potencia com arrow function dentro de arrow function
// const potencia = (base) => {
//   return (exp) => {
//     return Math.pow(base, exp)
//   }
// }
// console.log(potencia(2)(8))

// ou 
const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10))