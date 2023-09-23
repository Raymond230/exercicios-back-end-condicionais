const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

if (aposentada || portadoraDeDoenca) {
  console.log("INSETA")
} else if (totalDeRendimentos <= 28.55970) {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else if (totalDeRendimentos >= 28.55970) {
  console.log("PEGA LEAO")
}