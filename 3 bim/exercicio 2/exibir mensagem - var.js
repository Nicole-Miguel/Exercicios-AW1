//por ser var, é possível acessar a variável exibeMensagem em todo o escopo da função

var exibeMensagem = function() {
var mensagemForaDoIf = 'Caelum';
if(true) {
var mensagemDentroDoIf = 'Alura';
console.log(mensagemDentroDoIf)// Alura ;
}
console.log(mensagemForaDoIf); // Caelum
console.log(mensagemDentroDoIf); // Alura
}