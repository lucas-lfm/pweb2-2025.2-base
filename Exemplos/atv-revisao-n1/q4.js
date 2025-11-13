// IIFE
(function(a, b){
    let teste = "teste";
    console.log(a + b);
})(10, 5);

// console.log(teste); // ReferenceError: teste is not defined

// Uma IIFE isola o escopo das variáveis declaradas dentro dela, impedindo que sejam acessadas fora do seu contexto.
(function abc(){
    let privateVariable = "x";
    console.log(privateVariable);
})();

console.log(privateVariable); // ReferenceError: privateVariable is not defined
