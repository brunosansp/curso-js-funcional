// 1 == '1' compara os valores, este resultado é igual a true
// 1 === '1' comparação extrita, compara o valor e o tipo de dado, aqui é igual a false


function bomDia() {
  console.log('Bom dia!')
}

function boaTarde() {
  console.log('Boa tarde!')
}

// 1. Passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn) {
  if (typeof fn == 'function') {
    fn()
  }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2. Retornar uma função a partir de uma outra função
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp)
  }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
// ou
const pot34 = potencia(3)(4)
console.log(pot34)