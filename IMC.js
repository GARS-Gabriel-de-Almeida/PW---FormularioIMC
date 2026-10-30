var peso = document.getElementById("peso");
var alt = document.getElementById("altura");

document.getElementById("resul").onclick = function() {

    let resultado = Number(peso.value) / (Number(alt.value) * Number(alt.value));

    document.getElementById("imc").textContent = resultado.toFixed(2);

    document.querySelectorAll(".destaque").forEach(elemento => {
        elemento.classList.remove("destaque");
    });

    let faixa;

    if (resultado < 18.5) {
        faixa = "abaixo";
    }
    else if (resultado < 25) {
        faixa = "normal";
    }
    else if (resultado < 30) {
        faixa = "sobrepeso";
    }
    else if (resultado < 35) {
        faixa = "obesidade1";
    }
    else if (resultado < 40) {
        faixa = "obesidade2";
    }
    else {
        faixa = "obesidade3";
    }

    document.getElementById(faixa).classList.add("destaque");

    let celula = document.getElementById("fx" + faixa);

    celula.classList.add("destaque");

};