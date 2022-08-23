//a variável declarada como var pôde ser acessada em todo escopo da função
//variável declarada como let só pôde ser acessada no bloco em que foi declarada

var exibeMensagem = function() {
if(true) {
var escopoFuncao = 'Caelum';
let escopoBloco = 'Alura';
console.log(escopoBloco); // Alura
}
console.log(escopoFuncao); // Caelum
console.log(escopoBloco); // Mensagem de erro
}
