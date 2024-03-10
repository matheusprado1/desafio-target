const readline = require("readline");

// Cria uma interface de leitura e escrita para o terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para inverter uma string
const reverseString = () => {
  rl.question("Digite uma palavra para ser invertida:", (str) => {
    // Array para armazenar os caracteres da string
    const charArray = [];

    // Loop para adicionar os caracteres da string invertendo o array
    for (let i = str.length - 1; i >= 0; i--) {
      charArray.push(str[i]);
    }

    // Junta os caracteres do array para formar a string invertida
    const reversedString = charArray.join("");
    console.log(reversedString);

    rl.question("Deseja inverter outra palavra? (s/n): ", (response) => {
      if (response.toLowerCase() === 's') {
        // Chama a função novamente para uma nova verificação
        reverseString();
      } else {
        console.log("Saindo...");
        // Fecha a interface de leitura
        rl.close();
      }
    });
  });
}

// Inicia a função para inverter uma string
reverseString();
