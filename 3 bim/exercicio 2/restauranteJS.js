function calcular() {

    var valorQuilo = document.getElementById("quilo").value;
    var consumoGramas = document.getElementById("consumo").value;

    var preco = ( valorQuilo / 1000) *  consumoGramas;

    document.write("Valor por quilo: R$ " + valorQuilo + "<br>");
    document.write("Consumo em gramas: " + consumoGramas + "<br>");
    document.write("Valor a ser pago: R$ " + preco);
}
