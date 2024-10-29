function somar() {
    let primeiroNumero = document.getElementsByName("numero")[0].value;
    let segundoNumero = document.getElementsByName("numero")[0].value;

    let resultado = primeiroNumero + segundoNumero;

    document.getElementsByName("resultado")[0].innerText = resultado;
}

document.querySelector("button").addEventListener("click", somar);