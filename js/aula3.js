function estiloParagrafo() {
    const cores = [
        "red",
        "green",
        "purple",
        "light blue",
        "yellow"
    ];

    let paragrafos = document.getElementsByTagName("p");

    for (let i = 0; i <= paragrafos.length; i++) {
        let corAplicada = cores[(Math.floor(Math.random() * cores.length))];
        paragrafos[i].style.color = corAplicada
    }
}
document.querySelector("button").addEventListener("click", estiloParagrafo);


/** FUNÇÃO PARA QUE TODOS OS PARAGRAFOS FIQUEM DA MESMA COR
 * function estiloParagrafo() {
    let paragrafos = document.getElementsByTagName("p")

    for(let i = 0; i <=  paragrafos.length; i++) {
        paragrafos[i].style.color = "purple";
    }
}

document.querySelector("button").addEventListener("click", estiloParagrafo)
 */
