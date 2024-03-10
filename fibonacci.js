const readline = require("readline");

// Cria uma interface de leitura e escrita para o terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para checar se o numero inserido pelo usuário pertence a sequência de fibonacci
const checkFibonacci = () => {
  // Solicita ao usuário que insira um número
  rl.question("Digite um número e descubra se ele faz parte da sequência de fibonacci: ", (num) => {
    // Converte a entrada do usuário para um número
    const numConverted = Number(num);

    // Inicializa a sequência de Fibonacci com os dois primeiros números
    const fibonacciSequence = [0, 1];

    // Gera a sequência de Fibonacci até que o próximo número seja maior que o número inserido pelo usuário
    for (let i = 2; i < 100 && fibonacciSequence[i - 1] + fibonacciSequence[i - 2] <= numConverted; i++) {
      fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
    }

    // Verifica se o número inserido pelo usuário está na sequência de Fibonacci
    if (fibonacciSequence.includes(numConverted)) {
      console.log(`O número ${numConverted} pertence a sequência de fibonacci.`);
    } else {
      console.log(`O número ${numConverted} NÃO pertence a sequência de fibonacci.`);
    }

    // Solicita ao usuário se deseja verificar outro número
    rl.question("Deseja verificar outro número? (s/n): ", (response) => {
      if (response.toLowerCase() === 's') {
        // Chama a função novamente para uma nova verificação
        checkFibonacci();
      } else {
        console.log("Saindo...");
        // Fecha a interface de leitura
        rl.close();
      }
    });
  });
};

// Inicia a interação
checkFibonacci();
