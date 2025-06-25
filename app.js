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
// ______________________________________________________________________________
// ques no 9
// Check if an element has an attribute
// Goal:
// Create an <img> tag with an id="myImage" and src="image.jpg"
// Write JS to check if it has a src attribute and log true or false in the 
// console.
// Expected Output:
// true (because src exists)
// _____________
// ans 
// var check = document.getElementById('ok');
//  console.log(check)
//  var result = check.hasAttribute('href'
//  );
//  console.log(result);
//  var getValue = check.getAttribute('href');
//  console.log(getValue);
//  var setNewAtrribute;
//  check.setAttribute('href','wrong');
//  console.log(check.attributes);
//  var newget = check.getAttribute('acha');
//  console.log(newget);
//  console.log(check.attributes.length)
// ______________________________________________________________________________________
// ques no 10
// 
// __________
// ans 
// var get = document.getElementById('ok');
// console.log(get);
// var check = get.hasAttribute('href');
// console.log(check);
// // now i want to update it
// get.setAttribute('width','200px');
// console.log(get.attributes)
// // can i set  or update by saving variable
// let newget = get.setAttribute('width','200px');
// ________________________________________________________________________________________
// ques no 11
// Check for an attribute
// Create an <a> element with an href.
// Use hasAttribute to check if it has href and title.
// Log the results.
// _________________________
// ans 
// let get = document.getElementById('checkAtrribute');
// console.log(get);
// let check = get.hasAttribute('src');
// console.log(check);

// _____________________________________________________________________________________
// ques no 12
//  Get an attribute value
// Create an <img> with a src and alt.
// Use getAttribute to get the src and alt values.
// Log them to the console.
// ________________
// ans 
// let get = document.getElementById('at');
// console.log(get);
// let check = get.hasAttribute('src');
// console.log(check);
// let getA = get.getAttribute('alt');
// console.log(getA)
// _____________________________________________________________________________
// ques no 13
// Create a <p> with no id.
// Use setAttribute to add an id.
// Log the element to see the change.
// -_________________________
// ans 
// let get = document.querySelector('p');
// console.log(get);
// get.setAttribute("id","ph");
// console.log(get.attributes);
// ________________________________________________________________________________________
// ques no 14
// Read a link’s href and change it
// Create an <a> with href="https://example.com".
// Use getAttribute to get href.
// Use setAttribute to change it to https://google.com.
// ________________________
// ans 
// let get = document.getElementById('hf');
// console.log(get);
// let check =get.getAttribute('href');
// console.log(check)
// get.setAttribute('href',' https://google.com');
// console.log(get.attributes);
// let againCheck = get.getAttribute('href');
// console.log(againCheck);
// __________________________________________________________________________
// ques no 15
// Add a custom data- attribute
// Create a <div> with no data-info.
// Use setAttribute to add data-info="secret".
// Use getAttribute to read it back.
// _______________________
// ans 
// let get = document.querySelector('div');
// console.log(get);
// get.setAttribute('data-info','secret');
// console.log(get.attributes);
// let check = get.getAttribute('data-info');
// console.log(check)
// ____________________________________________________________________________________
// ques no 16
// Toggle an attribute based on condition
// Create a <button> with disabled.
// Use hasAttribute to check if it’s disabled.
// If it is, use setAttribute to remove disabled (hint: use removeAttribute too).
// If it’s not, add it back.

// __________________________
// ans 
// let get = document.querySelector('button'
// );
// console.log(get);
// if(get.hasAttribute('disabled')){get.removeAttribute('disabled');
//     console.log('disabled removed')
// }
// else{get.setAttribute('disabled','');
//     console.log('disable added')
// }
// console.log(get)
// ___________________________________________________________________________________
// ques no 17
// Create a simple HTML page with a <p> element.
// Use getElementById or querySelector to select it.
// Log the element in the console.
// ________________
// ans 
// let get = document.getElementById('ph');
// console.log(get.innerHTML)
// let receive = document.querySelector('p');
// console.log(receive)
// ______________________________________________________________________________
// ques no 18
//  Change Text Content
// Select an <h1> or <p> element.
// Use .textContent or .innerHTML to change its text.
// ______________
// ans 
// let get = document.querySelector('p');
//    get.textContent = 'welcome';
//    console.log(get.textContent)
// let text = get.textContent;
// console.log(text);
// _____________________________________________________________________________________
// ques no 19
// select a <div> or <p>.
// Change its color, background, or font size using .style.
// ________________
// ans 
// let get = document.getElementById('ph');
// console.log(get);
// function styling(){let get = document.getElementById('ph');
//            get.className = 'head';
// }
// _________________________________________________________________________________
// ques no 20
// detailed exmaple of attributes concept clearing?
// _________
// let get = document.getElementById('at');
// console.log(get);
// // first we see hasAttribute 
// let checkHasAttribute = get.hasAttribute('href');
// console.log(checkHasAttribute);
// // output = true if available and if not available gives false 
// // now we get value of href attribute 
// let getValue = get.getAttribute('href');
// console.log(getValue);
// // output = www.google.com 
// // now we add a new attribute in html element 
// get.setAttribute('target','_blank');
// console.log(get.attributes);
// // now we get the value of our new added attribute 
// let newAddedAtrributValue = get.getAttribute('target');
// console.log(newAddedAtrributValue);
// // now we know that our element has how many total attributes 
// console.log(get.attributes.length);
// _____________________________________________________________________________________
// ques no 21
// dom concept 
// __________
// ans
let parent = document.getElementById("parent");
console.log(parent.children); // This will log a collection of 3 elements: <p>, <p>, <span>
