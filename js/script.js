const botao = document.getElementById("calcular");

const contaInput = document.getElementById("conta");

const gorjetaInput = document.getElementById("gorjeta");

const totalSpan = document.getElementById("total");

function calcularTotal() {
    const contaValor =  +contaInput.value; 
    const gorjetaValor = +gorjetaInput.value;
    // o '+' pega o valor e transforma em inteiro

    const gorjeta = (contaValor * gorjetaValor) / 100;

    const totalValor = contaValor + gorjeta;

    // const totalValor = contaValor * (1 + gorjetaValor / 100)
    
    totalSpan.innerText = totalValor.toFixed(2);
}

botao.addEventListener("click", calcularTotal);