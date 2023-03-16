let firstNumber = prompt('Primeiro numero');
let secondNumber = prompt('Segundo numero');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const divi = firstNumber / secondNumber;
const restDivi = firstNumber % secondNumber;

alert('Total da soma: ' + sum)
alert('Total da subtração: ' + sub)
alert('Total da multiplicação: ' + mult)
alert('Total da divisão: ' + divi)
alert('Resto da divisão: ' + restDivi)


if((sum % 2) > 0) {
  alert("A soma dos numeros é impar") }

else alert("A soma dos numeros é par")

if(firstNumber == secondNumber) {
  alert("Os números são iguais") }

else alert("Os números são diferentes")