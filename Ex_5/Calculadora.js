// Fun��o para realizar a opera��o de soma
function soma(a, b) {
    return a + b;
}

// Fun��o para realizar a opera��o de subtra��o
function subtracao(a, b) {
    return a - b;
}

// Fun��o para realizar a opera��o de multiplica��o
function multiplicacao(a, b) {
    return a * b;
}

// Fun��o para realizar a opera��o de divis�o
function divisao(a, b) {
    if (b === 0) {
        return "Erro: divis�o por zero!";
    } else {
        return a / b;
    }
}

// Fun��o para realizar a opera��o de resto da divis�o
function restoDivisao(a, b) {
    if (b === 0) {
        return "Erro: divis�o por zero!";
    } else {
        return a % b;
    }
}

// Fun��o principal para executar a calculadora
function executarCalculadora() {
    // Solicitar ao usu�rio a opera��o desejada e os n�meros
    var operacao = prompt("Digite a opera��o desejada (soma, subtra��o, multiplica��o, divis�o, resto):");
    var num1 = parseFloat(prompt("Digite o primeiro n�mero:"));
    var num2 = parseFloat(prompt("Digite o segundo n�mero:"));

    // Executar a opera��o selecionada e exibir o resultado
    switch (operacao.toLowerCase()) {
        case "soma":
            console.log("Resultado da soma: " + soma(num1, num2));
            break;
        case "subtra��o":
            console.log("Resultado da subtra��o: " + subtracao(num1, num2));
            break;
        case "multiplica��o":
            console.log("Resultado da multiplica��o: " + multiplicacao(num1, num2));
            break;
        case "divis�o":
            console.log("Resultado da divis�o: " + divisao(num1, num2));
            break;
        case "resto":
            console.log("Resultado do resto da divis�o: " + restoDivisao(num1, num2));
            break;
        default:
            console.log("Opera��o inv�lida!");
    }
}

// Chamada da fun��o principal
executarCalculadora();
