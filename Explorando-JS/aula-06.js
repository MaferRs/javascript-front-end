console.log(`Trabalhando com listas`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`


const listaDeDestinos = new Array(
   `Salvador`, 
   ` São Paulo`,
   ` Rio de Janeiro`
)

listaDeDestinos.push(` Curitiba`, ` Brasilia`) // adicionando elementos a lista dinamicamente
console.log(`Destinos possíveis: ${listaDeDestinos} `)

listaDeDestinos.splice(2,1) // deleta o elemento, inserindo a posição e a quantidade
console.log(listaDeDestinos)

console.log(listaDeDestinos[1]) // mostra um elemento em especifico
