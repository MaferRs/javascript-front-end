const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            return resposta.json()
        })
}

const criaCliente = () => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: { JSON.stringify{}
            nome,
        email,
        })
}
}


export const clienteService = {
    listaClientes
}