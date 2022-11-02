console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
   `Salvador`,
   ` São Paulo`,
   ` Rio de Janeiro`
)

const idadeComprador = 15// 15
const estaAcompanhada = true

console.log(`Destinos possíveis: ${listaDeDestinos} `)

if (idadeComprador >= 18 || estaAcompanhada == true) {
   console.log(`Passagem autorizada, comprador maior de idade`)
   listaDeDestinos.splice(1, 1)
} else {
   console.log(`Passagem Negada, comprador menor de idade`)
}

console.log(listaDeDestinos)

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador == 18)
