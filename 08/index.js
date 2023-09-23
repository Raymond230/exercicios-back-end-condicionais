const idade = 17;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
  console.log("Não permitido a Entrada")
} else if (ehEstudante || idade <= 17) {
  console.log("entrada 10 reais")
} else {
  console.log("Entrada 20 reais")
}
