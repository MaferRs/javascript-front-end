export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
    } else {
        input.parentElement.classList.add('input-container--invalido')
    }
}


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
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)

}



function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ""
    if (!maiorQue18(dataRecebida)) {
        mensagem = "Você deve ser maior que 1 anos para se cadastrar."
    }
    input.setCustomValidity(mensagem)
}



function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, datagetUTCMonth(), datagetUTCDate())
    return dataMais18 < dataAtual


}