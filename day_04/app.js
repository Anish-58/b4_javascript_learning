let fullName = 'Anish Shrestha';
fullName = 'Rojan Bhatta';

const surName = 'Shrestha';
// surName = "lee"; this will throw the error.

var firstName = 'shrest';

let firstNum = 3;
let secondNum = 4;
let sum = firstNum + secondNum;

// let num1 = prompt('Enter the first number: ');
// let num2 = prompt('Enter the second number: ');
// alert(`Sum of ${num1} and ${num2} is: ${parseInt(num1) + parseInt(num2)}`);

const bio = `"hi my name is anish shrestha"`;

let nameLength = fullName.length;
console.log(fullName.charAt(2));

console.log(fullName.concat(' ', surName));

console.log(fullName.indexOf('t'));
console.log(fullName.lastIndexOf('t'));
console.log(surName.toUpperCase());

console.log(fullName.substring(0, fullName.indexOf(' ')));

let phoneNumber = '313-555-1234';
console.log(phoneNumber.substring(12, 4));

console.log(fullName.substring(fullName.indexOf(' '), fullName.length));

const fullNameWithMiddleName = 'alex li chen';
//print firstname, lastname middle name or if not middle mame dont print middle name;

let message = 'welcome to javascript class!';
console.log(message);
console.log(message.replace('javascript', 'programming'));

const salary = 10000;
const dob = 2020;
const weight = 50.5;
const height = 165.5;

//number functions
//parseInt
//parseFloat

let tip = '20.50';
let tipPerStaff = parseFloat(tip) / 5;
console.log('tipPerStaff', tipPerStaff.toString());

let veryBigNumber = 21345345255454262n;
let verybigInt = 21345345255454262;
console.log(veryBigNumber, verybigInt);

//Boolean
let isMarried = true;
let isStudent = false;

console.log(3 > 20);
console.log('Alex' == 'alex');
console.log(0 !== '0');

console.log(!!'Anish');
console.log(!!0);
console.log(!!'');
console.log(!!100);
console.log(!!null);
console.log(!!undefined);

console.log(!!parseInt(fullName));

// falsy values
// false
// 0
//-0
// 0n
//""
//null
//undefined
//nan

//nan(not a number)
console.log('cat' * 40);

// undefined
let pet; //cannot do the same with const coz we cannot reassign the value
console.log(pet);

// null
let student = {};
console.log(student);

student = null;
console.log(student);

//Symbol data type
let symbol1 = Symbol('SkillsUpLab');
let symbol2 = Symbol('SkillsUpLab');
console.log(symbol1, typeof symbol2);
console.log(symbol1 === symbol2);

//objects
const subject = {
  name: 'Intro to javascipt',
  intro: 'Small intro to javascript',
  price: 1000,
  instructor: 'Nabin Sir',
};
console.log(subject, typeof subject);
// we cannot reassign value in the object but we can reassign the value of the inside that object like below
subject.name = 'Intro to the programming';
console.log(subject);
console.log(subject.intro);

//Array
const fruits = ['Apple', 'Banana', 'Guava', 'Mango'];
console.log(fruits, typeof fruits, fruits[fruits.length - 1]);
console.log(fruits, typeof fruits, fruits[0]);

fruits[0] = 'tamato';
console.log(fruits);

// SCOPE
//global scope
//function scope
//module scope
//block scope

// arthmetic operators
// + - * / %

let a = 10;
let b = 20;
let c = a + b;

let d = b - a;
let e = a * b;
let f = b / a;
let g = c / d;
let h = b % a;
let i = a + b - (((c * d) / e) % f);
let j = i++;
let k = i--;
let l = ++i;
let m = --i;
console.log({
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
});

//unary operators
// ++ , --
