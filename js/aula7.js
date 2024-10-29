let paragrafo = document.querySelector("p");

let novoParagrafo = document.createElement("p");
novoParagrafo.innerText = paragrafo.innerText;
novoParagrafo.style.color = "pink";

document.querySelector("main").appendChild(novoParagrafo);
