function soma(a, b){return a + b};
function multiplica(a,b){return a + b};

function calcula(fnOperacao, valorA, valorB){
    return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));