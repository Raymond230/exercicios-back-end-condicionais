const primeiroNome = "Mario";
const sobrenome = "Bros";
const apelido = "";

const nomeCompleto = apelido || (primeiroNome + (sobrenome ? " " + sobrenome : " "))

console.log(nomeCompleto)
