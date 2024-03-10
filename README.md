# Desafio Target Sistemas

Este projeto consiste em duas partes principais: uma para verificar se um número pertence à sequência de Fibonacci e outra para inverter uma string. Ambos os scripts são escritos em JavaScript e utilizam a biblioteca readline para interação com o usuário via terminal.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em seu sistema. O Node.js é necessário para executar os scripts JavaScript no terminal.

## Estrutura de Arquivos

O Projeto é composto por dois arquivos principais:

- `fibonacci.js`:  Este arquivo contém a lógica para verificar se um número inserido pelo usuário pertence à sequência de Fibonacci.

- `reverse.js`: Este arquivo contém a lógica para inverter uma string inserida pelo usuário.

## Como Utilizar

### Verificação de Fibonacci

1. Executar o Script: Para iniciar a verificação de um número na sequência de Fibonacci, execute o seguinte comando no terminal:

```bash
node fibonacci.js
```

2. Inserir um Número: Após executar o script, você será solicitado a digitar um número. Este número será verificado para determinar se pertence à sequência de Fibonacci.

3. Verificação: O script irá informar se o número inserido pertence ou não à sequência de Fibonacci.

4. Verificar Outro Número: Após a verificação, você será perguntado se deseja verificar outro número. Digite `s` para sim ou `n` para não.

### Inversão de String

1. Executar o Script: Para iniciar a inversão de uma string, execute o seguinte comando no terminal:

```bash
node reverse.js
```

2. Inserir uma String: Após executar o script, você será solicitado a digitar uma palavra. Esta palavra será invertida.

3. Inversão: O script irá exibir a palavra inserida invertida.

4. Inverter Outra Palavra: Após a inversão, você será perguntado se deseja inverter outra palavra. Digite `s` para sim ou `n` para não.

## Questão 4)

### Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

### Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

1- Primeiro, ligaremos o interruptor 1 na segunda sala e deixaremos a lâmpada acesa por um tempo.

2- Em seguida, desligaremos o interruptor 1.

3- Agora, ligaremos o interruptor 2 na segunda sala e deixaremos a lâmpada acesa.

4- Finalmente, iremos até a primeira sala.

Agora, podemos concluir que:

- A lâmpada que estiver acesa corresponde ao interruptor 2.
- A lâmpada que estiver quente corresponde ao interruptor 1.
- A única lâmpada que restar é a do interruptor 3. 