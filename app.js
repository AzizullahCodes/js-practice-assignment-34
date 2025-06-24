// js-practice-assignment series no 34
// _________________________________________________________________________________
// Q 1 
//  Ask the user to enter a number from 1 to 7 using prompt().
// 2️⃣ Use a switch statement to show which day it is:
// 1 → Sunday
// 2 → Monday
// 3 → Tuesday
// 4 → Wednesday
// 5 → Thursday
// 6 → Friday
// 7 → Saturday
// 3️⃣ Show the day name using alert() and console.log().

// _______________
// ans 
// let num = 77;
// switch (num){case(1):console.log('sunday')
//     break;
//     case(2):console.log('Monday')
//     break;
//     case(3):console.log('Tuesday')
//     break;
//     case(4):console.log('Thursday')
//     break;
//     case(5):console.log('Friday')
//     break;
//     case(6):console.log('saturday');
//     break;
//     case(7):console.log('sunday');
//     break;
//     default:console.log('invalid entry')
// }
// ____________________________________________________________________________________
// Q 2
// ask the user to enter an operator: +, -, *, or /.
// 2️⃣ Ask the user to enter two numbers.
// 3️⃣ Use a switch statement to perform the calculation based on the operator.
// 4️⃣ Show the result with alert() and console.log().
//  let operator = prompt('enter an operator -,+,/ or *');
//  let num1 = Number(prompt('enter number 1'));
//  let num2 = Number(prompt('enter number 2'));
//  switch (operator){case('+'):let sum = num1 + num2;
//     console.log(sum)
// break;
// case('-'):let subtract = num1 - num2;
// console.log(subtract);
// break;
// case('*'):let multiplication = num1 * num2;
// console.log(multiplication);
// break;
// case('/'):let division = num1/ num2;
// console.log(division);
// break;
// default:console.log('invalid entry')
//  }
// _______________________________________________________________________________
// Q 3
// playing with date()
// ans 
// let current = new Date();
// let year = current.getFullYear();
// console.log(year);
// let month = current.getMonth() + 1;
// console.log(month);
// let day = current.getDay();
// console.log(day);
// let date = current.getDate();
// console.log(date);
// let hours = current.getHours();
//    console.log(hours);
//    let minutes = current.getMinutes();
//    console.log(minutes);
// let seconds = current.getSeconds();
// console.log(seconds);
// let milliSeconds = current.getMilliseconds();
// console.log(milliSeconds);
// console.log(current.getTime());
// console.log(current.toLocaleDateString());
// console.log(current.toLocaleTimeString());
// ___________________________________________________________________________________
// ques no 4
// math.round,ceil,floor etc
// _____________
// ans 
// let num = 32.178;
// console.log(num);
// // let ceil = Math.ceil(num);
// // console.log(ceil);
// // let floor = Math.floor(num);
// // console.log(floor)
// let round = Math.round(num);
// console.log(round)
// _______________________________________________________________________________________
// ques no 5
// string to number conversion
// _________________
// ans 
// let num = '67.786';
// console.log(num);
// console.log(typeof num);
// let result = parseInt(num);
// console.log(result);
// console.log(typeof result);
// _____________________________________________________________________________________
// ques no 6
// show today day with date();
// _____________________
// ans 
// let days = ['sunday','monday','tuesday','wednesday','thursday','friday','satrday'];

// let current = new Date();
// let today = current.getDay();
// console.log(today);
// let result = days[today];
// console.log(result)
// _____________________________________________________________________________
// ques no 7
//  Month Name
// Ask the user to enter a number between 1 and 12.
// Use a switch to display the name of the month.
// 1: January, 2: February, ..., 12: December.
// If the number is not valid, show an error.
// ________________
// ans 
// function state(){let getValu = Number(document.getElementById('it').value);
//     console.log(getValu);
//     let a = getValu;
//     var monthName;
//     switch (a){case 1:
//         monthName = 'jan';
//         break;
//         case 2:
//         monthName = 'feb';
//         break;
//         case 3:
//         monthName = 'mar';
//         break;
//         case 4:
//         monthName = 'april';
//         break;
//         case 1:
//         monthName = 'may';
//         break;
//         case 1:
//         monthName = 'june';
//         break;
//         case 1:
//         monthName = 'july';
//         break;
//         case 1:
//         monthName = 'aug';
//         break;
//         case 1:
//         monthName = 'sep';
//         break;
//         case 1:
//         monthName = 'oct';
//         break;
//         case 1:
//         monthName = 'nov';
//         break;
//         case 1:
//         monthName = 'dec';
//         break;
//         default:
//           monthName = 'Inavlid month number'
//     }
//     document.getElementById('ph').innerHTML = monthName;
// }
// _________________________________________________________________________________________
// ques no 8
//  Guess the Random Number Game
// Ask the user to guess a number between 1 and 10 using prompt().

// Use Math.random() to generate a random number between 1 and 10.

// Compare the user's guess with the random number.

// Show a message using alert() or console.log():

// 🎉 "Correct! You guessed the number."

// ❌ "Wrong! The correct number was X."
// ______________________
// ans 
// function rounding(){let round = Math.floor((Math.random()*3)+1);
//   let a = Number(document.getElementById('it').value);
//     let result = document.getElementById('phh');
//     if(a === round){result.innerHTML = 'win'}
//     else{result.innerHTML = 'lose'}
// }