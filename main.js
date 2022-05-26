//Check user input is divisible by 3 //

var userInput = prompt('Enter a number that is divisible by 3');

if (userInput % 3 === 0) {
  alert('Number is divisible by 3');
} else {
  alert('Number is not divisible by 3');
}

//Check user input is even or odd //

var userInputEvenOdd = prompt('Enter a number');

if (userInputEvenOdd % 2 === 0) {
  alert('Even number');
} else {
  alert('Odd number');
}

//Check user age

var userInputAge = prompt('Enter your age');

if (userInputAge < 18) {
  alert('Too Young');
} else {
  alert('Old Enough');
}

//check user input names and diplay greetings according to their name//

var userInputName = prompt('Enter your name');

if (userInputName.toLocaleLowerCase() !== 'uzair') {
  alert(`Greetings ${userInputName}`);
}

//Check user input is divisible by 3 with swtich case //

var userInput = prompt('Enter a number that is divisible by 3');

switch (userInput) {
  case userInput % 3 === 0:
    alert('Number is divisible by 3');
    break;
  default:
    alert('Number is not divisible by 3');
}

//check whether the user input is number , uppercase, lowercase

var userInput = prompt('Enter something');

if (!isNaN(userInput)) {
  alert('Input is a number');
} else if (userInput === userInput.toUpperCase()) {
  alert('Word is a uppercase');
} else if (userInput === userInput.toLowerCase()) {
  alert('Word is a lowercase');
}

//Create a calculator + - //
var number1 = +prompt('Enter Number 1 ');
var number2 = +prompt('Enter Number 2 ');
var operator = prompt('Enter Operator +, -, /, %');

if (operator === '+') {
  alert(number1 + number2);
} else if (operator === '-') {
  alert(number1 + number2);
} else if (operator === '*') {
  alert(number1 * number2);
} else {
  alert(number1 / number2);
}

//program that takes input in 24Hours and show in clock time like 1900=7PM

var time24h = prompt('Enter Time in 24 Hours').toLowerCase();

if (time24h === '12am') {
  alert('0000');
} else if (time24h === '1am') {
  alert('0100');
} else if (time24h === '2am') {
  alert('0200');
} else if (time24h === '3am') {
  alert('0300');
} else if (time24h === '4am') {
  alert('0400');
} else if (time24h === '5am') {
  alert('0500');
} else if (time24h === '6am') {
  alert('0600');
} else if (time24h === '7am') {
  alert('0700');
} else if (time24h === '8am') {
  alert('0800');
} else if (time24h === '9am') {
  alert('0900');
} else if (time24h === '10am') {
  alert('1000');
} else if (time24h === '11am') {
  alert('1100');
} else if (time24h === '12am') {
  alert('1200');
} else if (time24h === '1pm') {
  alert('1300');
} else if (time24h === '2pm') {
  alert('1400');
} else if (time24h === '3pm') {
  alert('1500');
} else if (time24h === '4pm') {
  alert('1600');
} else if (time24h === '5pm') {
  alert('1700');
} else if (time24h === '6pm') {
  alert('1800');
} else if (time24h === '7pm') {
  alert('1900');
} else if (time24h === '8pm') {
  alert('2000');
} else if (time24h === '9pm') {
  alert('2100');
} else if (time24h === '10pm') {
  alert('2200');
} else if (time24h === '11pm') {
  alert('2300');
} else {
  alert('2400');
}

//match the correct passwrod programm//

var storedPass = 'qwerty';
var userInputPass = prompt('Enter your password');

if (userInputPass === '') {
  alert('Please enter your password');
} else if (userInputPass === storedPass) {
  alert('Correct!');
} else {
  alert('Incorrect Password');
}

//Q11

var firstName = 'Ali';
if (firstName === 'Fahad') {
  alert('Hello Fahad!');
} else {
  alert('You are not fahad');
}
