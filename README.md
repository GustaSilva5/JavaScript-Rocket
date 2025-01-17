# Curso Introdutório de JavaScript - Rocketseat

Este repositório contém anotações e exemplos de código do curso introdutório de JavaScript da Rocketseat.

## Conteúdo do Curso

### 1. Introdução ao JavaScript
- História e evolução do JavaScript
- Configuração do ambiente de desenvolvimento
- Sintaxe básica

### 2. Variáveis e Tipos de Dados
- Declaração de variáveis (`var`, `let`, `const`)
- Tipos de dados primitivos (string, number, boolean, null, undefined)
- Tipos de dados complexos (object, array)

### 3. Operadores
- Operadores aritméticos
- Operadores de atribuição
- Operadores de comparação
- Operadores lógicos

### 4. Estruturas de Controle
- Condicionais (`if`, `else`, `switch`)
- Laços de repetição (`for`, `while`, `do while`)

### 5. Funções
- Declaração e invocação de funções
- Parâmetros e retorno de funções
- Funções anônimas e arrow functions

### 6. Manipulação de Arrays
- Métodos de arrays (`push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`)

### 7. Manipulação de Objetos
- Criação e acesso a propriedades de objetos
- Métodos de objetos

## Exemplos de Código

Aqui estão alguns exemplos de código que foram desenvolvidos durante o curso:

### Exemplo 1: Função para inverter uma string
```javascript
function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}
console.log(inverterString("Rocketseat"));
