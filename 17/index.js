//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcela = valorDoProduto / quantidadeDoParcelamento;
const parcelasRestantes = quantidadeDoParcelamento - Math.ceil(valorPago / valorParcela); // Arredonda para cima 
console.log(`Restam ${parcelasRestantes} parcelas de R$ ${(valorParcela / 100).toFixed(2)}`);