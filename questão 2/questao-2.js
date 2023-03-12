// Solicita ao usuário que informe um número
const numero = prompt(
  'Digite um número para verificar se pertence à sequência de Fibonacci:'
)

// Inicializa os primeiros valores da sequência
let a = 0
let b = 1
let c

// Enquanto o valor atual da sequência for menor ou igual ao número informado
while (b <= numero) {
  // Se o valor atual for igual ao número informado, informa que pertence à sequência e encerra a execução
  if (b === numero) {
    alert(`O número ${numero} pertence à sequência de Fibonacci.`)
    break
  }

  // Calcula o próximo valor da sequência
  c = a + b
  a = b
  b = c
}

// Se o valor atual da sequência for maior que o número informado, informa que não pertence à sequência
if (b > numero) {
  alert(`O número ${numero} não pertence à sequência de Fibonacci.`)
}
