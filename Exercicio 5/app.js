function NumeroChar(){
    let texto = document.getElementById("texto").value
    let resp = texto.length
    document.getElementById("resposta").innerHTML = resp
}
// o .length  é acompanhado de uma variável com formato de texto,
// que tem como função contar o número de caracteres da palavra