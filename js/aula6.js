// adiciono um atributo ao elemento
document.getElementById("pr1").setAttribute("class", "pr-classe");

document.getElementsByClassName("pr-class")[0].computedStyleMap.color = "pink";

// removo um atributo do elemento
document.getElementById("pr2").removeAttribute("name");