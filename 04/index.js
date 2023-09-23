let ladoA = 3
let ladoB = 3



const nomeDasBuchas = {
  0: "branco",
  1: "Ás",
  2: "Duque",
  3: "Terno",
  4: "Quadra",
  5: "Quina",
  6: "Sena"
}

if (ladoA === ladoB) {
  const nomeBucha = nomeDasBuchas[ladoA]
  console.log(`Bucha de ${nomeBucha}`)
} else {
  console.log("não é uma bucha")
}