//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

let mensagem

if (quantidadeDeAguaIngerida < 1.5) {
  mensagem = "risco alto - você está ingerindo pouca água, beba mais"
} else if (quantidadeDeAguaIngerida <= 3) {
  mensagem = "risco moderado - você está ingerindo pouca água, beba mais"
} else {
  mensagem = "risco baixo - você está ingerindo uma boa quantidade"
}
console.log(mensagem)
