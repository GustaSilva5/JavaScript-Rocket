/*  Operator Precedence
    Precedencia de operadores

*   grouping                      ()
*   negação e incremento          ! ++ --
*   multiplicação e divisão       * /  
*   adição e subtração            + -
*   relacional                    < <= > >=
*   igualdade                     == != === !==
*   AND                           &&
*   OR                            ||
*   condicional                   ?:
*   assignment (atribuição)       = += -= *=
*/

// Exemplos

let naruto = 5;
let sasuke = 3;
let sakura = 2;

// grouping
let result = (naruto + sasuke) * sakura; // 16

// negação e incremento
let isNarutoStrong = !false; // true
naruto++; // 6

// multiplicação e divisão
result = naruto * sakura; // 12
result = naruto / sakura; // 3

// adição e subtração
result = naruto + sasuke; // 9
result = naruto - sakura; // 4

// relacional
let isNarutoStronger = naruto > sasuke; // true
let isSakuraWeaker = sakura <= sasuke; // true

// igualdade
let isEqual = naruto == 6; // true
let isStrictEqual = naruto === 6; // true
let isNotEqual = sasuke != 5; // true
let isStrictNotEqual = sakura !== 3; // true

// AND
let andResult = isNarutoStrong && isNarutoStronger; // true

// OR
let orResult = isNarutoStrong || isSakuraWeaker; // true

// condicional
let whoIsStronger = naruto > sasuke ? 'Naruto' : 'Sasuke'; // 'Naruto'

// assignment (atribuição)
naruto += 2; // 8
sasuke -= 1; // 2
sakura *= 2; // 4