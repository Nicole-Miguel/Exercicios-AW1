function calcularPeso() {
    var altura = document.getElementById("altura").value;
    var pesoIdeal;

    if (document.getElementById("mas").checked == true) {
        pesoIdeal = 22 * (altura * altura);
    } else {
        pesoIdeal = 21 * (altura * altura);
    }
    
    document.write("O peso ideal é " + pesoIdeal.toFixed(2) + " kg");
}

function limparCampos() {
    // Recarrega a página
    location.reload();
    // posiciona (joga o foco) no elemento nome
    document.getElementById("nome").focus();
}

var btLimpar = document.getElementById("btnLimpar");
btLimpar.addEventListener("click", limparCampos);

