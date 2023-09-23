const caractere = "E";

let vogal = "A, E, I, O, U, a, e, i, o, u"
let consoante = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz"
let numero = (1, 2, 3, 4, 5, 6, 7, 9, 0)

if (vogal.includes(caractere)) {
  if (vogal.includes(caractere.toUpperCase())) {
    console.log("Vogal maiúscula")
  } else {
    console("Vogal minúscula")
  }
} else if (consoante.includes(caractere)) {
  console.log("Consoante")

} else if (numero.includes(caractere)) {
  console.log("Numeo")
} else {
  console.log("não tem essa opção")
}