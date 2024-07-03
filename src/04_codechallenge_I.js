
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

console.log(" ");

// Geben Sie über eine Prompt-Anforderung eine Zahl ein.
let number1 = prompt("Bitte erste Zahl eingeben : ");
number1Int = parseInt(number1);
console.log(" ");

// Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
let number2 = prompt("Bitte die zweite Zahl eingeben : ");
number2Int = parseInt(number2);
console.log(" ");

// Berechnen Sie die Summe der beiden Zahlen.
let numberSum = number1Int + number2Int;

// Geben Sie die Summe der Zahlen in die Konsole aus:
console.log("Die Summe der Zahlen ist = " + numberSum);
console.log(" ");

