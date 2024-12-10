let city = 'kathmandu';
let message;
const isSydneyOrBrisbane = city == 'Sydney' || city == 'Brisbane';
if (isSydneyOrBrisbane) {
  message = 'Welcome to Australia';
} else if ((city = 'perth')) {
  message = 'Seems like you are from perth';
} else if ((city = 'Melbourne')) {
  message = 'Seems like you are from Melbourne';
} else {
  message = "You don't seem to be from Sydney or Brisbane";
}

let mobile = '0415733132';
if (mobile === '0415733132') {
  console.log('Your mobile matches the number');
} else {
  console.log('Your mobile number does match');
}

//ternary operator // which use if and else only like that
//(condition)? statement_when_condition_is_true :  statement_when_condition_is_false

mobile === '0415733132'
  ? console.log('Your mobile matches the number')
  : console.log('Your mobile number does match');

// let day = new Date();
// const hour = day.getHours();
// const greetings = hour < 12 ? 'Good Morning' : 'Good Afternoon';

let greetings; //here we cannot use const greetings because it can be only used once.
let day = new Date();
const hour = day.getHours();
if (hour < 12) {
  greetings = 'good morning';
} else {
  greetings = 'good afternoon';
}

//short circuit
// && ||

let greeting = hour < 12 && 'Good Morning';
greeting = hour < 12 || 'Good Afternoon';

// && true && something -> something
//false  && something -> false

// || true || something -> true
// || false || something -> something

const month = day.getMonth();
switch (month + 1) {
  case 1:
    monthName = 'January';
    break;
  case 2:
    monthName = 'February';
    break;
  case 11:
    monthName = 'November';
    break;
  default:
    monthName = 'Looks like it is not a valid month';
}

const element = document.getElementById('message');
element.innerHTML = monthName;

//LOOPS
//for
//for..in
//for...of
//do...while
//while

//for loop

// for (let i = 0; i < 100; i++) {
//   console.log(i + 1);
// }
// for (let i = 100; i > 1; i--) {
//   console.log(i);
// }

for (let j = 2; j <= 9; j++) {
  for (let i = 1; i <= 10; i++) {
    console.log(` ${j} * ${i} = ${j * i} `);
  }
}

//FOR IN LOOP  if we have property from an object or get anything from an object use for in loop.
const student = {
  firstName: 'Alex',
  lastName: 'Lee',
  email: 'youremail@gmail.com',
  address: '34 street',
};

for (let key in student) {
  console.log(`${key} value is ${student[key]}`);
}

//for..of
//loop through an array

let fruits = ['apple', 'banana', 'guava', 'mango', 'coconut'];
for (let [index, item] of fruits.entries()) {
  console.log(`${index}: ${item}`);
}

// do ..while
//this will execute at least once even if the condition is false because it does print first then checks the condition.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

//While loop
let j = 1;
while (j <= 10) {
  console.log({ j });
  j++;
}

//break, continue
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log({ i });
}
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log({ i });
} //this one skips 5

let phoneNumber = '555-767-789';
for (let digit of phoneNumber) {
  if (digit === '-') continue;
  console.log(digit);
}
// make an example of continue and break in do while loop and make it pracitical as possible
