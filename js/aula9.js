function enviarFormulario() {
    //primeira maneira (não otimizada)
    let nome = document.querySelector("input").value;
    let email = document.querySelector(".email").value;
    let telefone = document.querySelector("#telefone").value;

    //segunda maneira (otimizada)
    const pessoaDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "email": document.querySelectorAll("input")[1].value,
        "telefone": document.querySelectorAll("input")[2].value
    }

    alert(nome, email, telefone);
    alert(pessoaDTO)

}

document.querySelectorAll("input")[3].addEventListener("click", enviarFormulario)