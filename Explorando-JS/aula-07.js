console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
   `Salvador`,
   ` São Paulo`,
   ` Rio de Janeiro`
)

const idadeComprador = 18// 15
const estaAcompanhada = true
const temPassagemComprada = true

console.log(`Destinos possíveis: ${listaDeDestinos} `)

if (idadeComprador >= 18 || estaAcompanhada) {
   console.log(`Passagem autorizada`)
   listaDeDestinos.splice(1, 1)
} else {
   console.log(`Passagem Negada, comprador menor de idade`)
}
console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
   console.log(`Boa viagem`)
} else {
   console.log(`Você não pode embarcar`)
}

console.log(listaDeDestinos)

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador == 18)
