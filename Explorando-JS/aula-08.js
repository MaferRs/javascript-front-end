console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

)

const idadeComprador = 18// 15
const estaAcompanhada = false
let temPassagemComprada = false
const destino = "Rio de Janeiro"

console.log(`Destinos possíveis: ${listaDeDestinos} `)

const podeComprar = idadeComprador >= 18 || estaAcompanhada

let contador = 0
let destinoExiste = false
while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        console.log("O Destino Existe")
        destinoExiste = true
        break
    }
    contador += 1
}
console.log("Destino existe: ", destinoExiste)



if (podeComprar && destinoExiste) {
    console.log("Boa Viagem")
} else {
    console.log("Desculpe tivemos um erro!")
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        console.log("O Destino Existe")
        destinoExiste = true
    }

}