// Função para realizar a operação de soma
function soma(a, b) {
    return a + b;
}

// Função para realizar a operação de subtração
function subtracao(a, b) {
    return a - b;
}

// Função para realizar a operação de multiplicação
function multiplicacao(a, b) {
    return a * b;
}

// Função para realizar a operação de divisão
function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    } else {
        return a / b;
    }
}

// Função para realizar a operação de resto da divisão
function restoDivisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    } else {
        return a % b;
    }
}

// Função principal para executar a calculadora
function executarCalculadora() {
    // Solicitar ao usuário a operação desejada e os números
    var operacao = prompt("Digite a operação desejada (soma, subtração, multiplicação, divisão, resto):");
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));

    // Executar a operação selecionada e exibir o resultado
    switch (operacao.toLowerCase()) {
        case "soma":
            console.log("Resultado da soma: " + soma(num1, num2));
            break;
        case "subtração":
            console.log("Resultado da subtração: " + subtracao(num1, num2));
            break;
        case "multiplicação":
            console.log("Resultado da multiplicação: " + multiplicacao(num1, num2));
            break;
        case "divisão":
            console.log("Resultado da divisão: " + divisao(num1, num2));
            break;
        case "resto":
            console.log("Resultado do resto da divisão: " + restoDivisao(num1, num2));
            break;
        default:
            console.log("Operação inválida!");
    }
}

// Chamada da função principal
executarCalculadora();
