

function criptografar() {
    let texto = document.getElementById("text-input").value;
    let criptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("box").value = criptografado;
    document.getElementById("box-img").style.display = "none";
    document.getElementById("box-h3").style.display = "none";
    document.getElementById("box-p").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("box").style.display = "block";
}

function descriptografar() {
    let criptografado = document.getElementById("text-input").value;
    let texto = criptografado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("box").value = texto;
    document.getElementById("box-img").style.display = "none";
    document.getElementById("box-h3").style.display = "none";
    document.getElementById("box-p").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("box").style.display = "block";
}

function copiar() {
    let texto = document.getElementById("box");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}