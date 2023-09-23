const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui

if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tessoura" && jogada2 === "pedra") {
  console.log("Pedra ganhou")
} else if (jogada1 === "tessoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "tesoura") {
  console.log("Tessora ganhou")
} else if (jogada1 === "pedra" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "pedra") {
  console.log("papel ganhou")
} else {
  console.log("joga invalida")
}