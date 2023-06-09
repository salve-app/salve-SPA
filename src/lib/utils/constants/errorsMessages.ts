const profile: ErrorsCategories = {
  fullName: 'Digite somente letras e espaços',
  cpf: 'CPF inválido',
  birthday: 'Digite uma data válida',
  phoneNumber: 'Digite um número válido',
}

interface ErrorsCategories {
  [key: string]: string
}

interface Errors {
  [key: string]: ErrorsCategories
}

const ErrorMessages: Errors = { profile }

export default ErrorMessages
