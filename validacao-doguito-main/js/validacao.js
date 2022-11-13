export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelectpr('.input-menasgem-erro').innerHTML = ""
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelectpr('.input-menasgem-erro').innerHTML = mostraMensagemDeErro
            (tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing',
    ' typeMismatch',
    'patternMismatch',
    'customError'

]


const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo de Email não pode estar vazio',
        typeMismatch: 'O email digitado não é valido'
    },
    senha: {
        valueMissing: 'O campo de Senha não pode estar vazio',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos 1 letra maiúscula um número e não pode haver simbolos e nem espaços'
    },
    dataNascimmento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio',
        customError: 'Você deve ser maior de 18 anos para se cadastrar'
    },
    cpf: {
        valueMissing: 'O campo de cpf não pode estar vazio',
        customError: 'O CPF digitado não é válido'
    }

}

const validadores = {
    dataNascimento: input => validaDataNascimento(input),
    cpf: input => validaCPF(input)

}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = " "
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}


function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ""
    if (!maiorQue18(dataRecebida)) {
        mensagem = "Você deve ser maior que 1 8anos para se cadastrar."
    }
    input.setCustomValidity(mensagem)
}



function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, datagetUTCMonth(), datagetUTCDate())
    return dataMais18 < dataAtual

}
function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '')
    let mensagem = ""

    if (!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
        mensagem = " O CPF digitado não é válido"
    }
    input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]
    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if (valor == cpf) {
            cpfValido = false
        }
    })
    return cpfValido
}
function checaEstruturaCPF(cpf) {
    const multiplicador = 10
    return checaDigitoVerificador(cpf, multiplicador)
}

function checaCPFRepetido(cpf, multiplicador) {
    if (multiplicador >= 12) {
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split(" ")
    const checaDigitoVerificador = cpf.charAt(multiplicador - 1)
    for (let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++
    }
    if (checaDigitoVerificador == confirmaDigito(soma)) {
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }
    return false
}


function confirmaDigito(soma) {
    return 11 - (soma % 11)
}

// 123 456 789 09
// let soma = (11 * 1) + (10 * 2) + (9 * 3) ... (2 * 0)
// let difitoVerificar = 11 - (soma % 11)