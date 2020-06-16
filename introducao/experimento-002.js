function esperarPor(tempo) {
  const futuro = Date.now() + tempo
  while(Date.now() < futuro) {}
}

// setTimeout(() => console.log('Exec #01'), 3000)
// setTimeout(() => console.log('Exec #02'), 300)

setTimeout(() => console.log('Exec #01'), 3000)
setTimeout(() => {
  esperarPor(3000)
  console.log('Exec #02')
}, 300)

// setInterval(() => console.log('Exec #01'), 3000)
// setTimeout(() => {
//   esperarPor(3000)
//   console.log('Exec #02')
// }, 300)

esperarPor(5000)
console.log('Fim!')