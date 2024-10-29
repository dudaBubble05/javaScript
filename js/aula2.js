document.getElementById("figurinha").style.frontSize = "50px";

function cute() {
    document.getElementById("figurinha").textContent = "🙈";
}

function achou() {
    document.getElementById("figurinha").textContent = "🙉";
}

document.getElementById("figurinha").addEventListener("mouseout", cute);
document.getElementById("figurinha").addEventListener("mouseover", achou);
