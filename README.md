# Projeto: Funções de Operações Matemáticas

Este projeto demonstra o uso de **funções em JavaScript** para realizar operações matemáticas e como passar funções como parâmetros para outras funções (funções de ordem superior).

---

## Código

```javascript
function soma(a, b) {
    return a + b;
}

function multiplica(a, b) {
    return a + b; // Observação: provavelmente você queria multiplicar, use a * b
}

function calcula(fnOperacao, valorA, valorB) {
    return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));
