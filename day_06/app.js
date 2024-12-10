//Array () Constructor
//Assignning array as a value

let daysOfAWeek = new Array(
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
);
//above is the first process to define an array howeveer both process are the same process no good or bad.
let numbers = [0, 1, 2, 3, 4, 5, 6]; //this is the second process
let weekNames = ['sunday', 'Monday', 'tuesday'];

//creating an array with array constructor
let subjectName = new Array('Math', 'Science', 'Computer', 'Biology', 'Social');

//creating an array with array literal
let pastAdresses = ['lidcombe', 'Auburn', 'Granville'];

//spliter
const address = '10 Bridge Street, Granville 2142, NSW';
const addressArr = address.split(',');

let streetAddress = addressArr[0];
let streetSuburb = addressArr[1];
let streetState = addressArr[3];

addressArr[1] = 'Merryland '; //even after doing this in the console if we type setreetsubuurb the value will still be the same because it is already print then we gave the new value.

addressArr[4] = 'Australia';

//using for of loop to loop thorugh addressArr and print all items.
for (let item of addressArr) {
  console.log(item);
}

//using for loop
for (i = 0; i < address.length; i++) {
  console.log(addressArr[i]);
}

//delete array elements
//1. change the length of an Array
addressArr.length = 4;

delete addressArr[2]; //practical way to delete an element from an array where delete is the keyword.

const value0 = numbers.push(100); //to add at the end of an array and that value0 will return the length of an array in this one. but the pop will return the value we have removes not the length.

const value1 = numbers.pop(100); //to remove

numbers.unshift(-1); //add the value to at the front of the array

const value3 = numbers.shift(); //remove the first element of an array

//splice
//remove from the middle of an array
const value4 = numbers.splice(4, 2); // the value in the bracket here defines we start from index 4 and delete 2 items.

//fullname = 'Donald Lee Trump'
//remove the moiddle name and return Donald trump as final result.

let fullName = 'Donald Lee Trump';
const value5 = fullName.split(' '); //first we need to split with space and convert to array then we need to join by space again.
value5.splice(1, 1);
let updatedFullName = value5.join(' ');

let newNumbers = [101, 102, 103, 104, 105];
const combinedNumbers = numbers.concat(newNumbers); //concat combines two arrayss

const stringNumbers = combinedNumbers.toString(); //this is convert to string

const indexOf101 = combinedNumbers.indexOf(101);

//callback function
//reduce

const total = combinedNumbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);
//here we use function inside reduce but we can give any initial value and the current value is the combinedNumbers from 0,1,2,3,4,5,101,....,105.

//Map
//return an array with capitalized first letter and other letter lowercase
let groceryList = ['apple', 'eGg', 'milk', 'OniON', 'GARLIC', 'OranGe'];
const mappedGroceryList = groceryList.map(function (item) {
  let firstLetter = item[0].toUpperCase();
  let restLetter = item.slice(1, item.length).toLowerCase();
  let capitalizedItem = firstLetter + restLetter;
  return capitalizedItem;
});

//filter
let groceryStartingWithO = mappedGroceryList.filter(function (item) {
  if (item[0].toUpperCase() === 'O') {
    return true;
  }
  return false;
});

//Destructuring an Array
const [newStreetAddress, newSuburb, newState] = addressArr;

//spreading an array
//...  this is the triple dot to use the spread

const letters = ['a', 'e', 'i'];
let newLetters = ['o', ...letters, 't', 'u'];

let [o, t, ...rest] = newLetters;

// Access and modify array elements.
// Add or remove elements (using push(), pop(), shift(), unshift()).
// Iterate over an array (using for, forEach(), map(), etc.).
// Search for elements (using indexOf(), includes(), find()).
// Transform arrays (using sort(), filter(), map()).

const arrayFunctions = new Array(
  'Access and modify array elements',
  'Add or remove elements (using push(), pop(), shift(), unshift()).',
  'Iterate over an array (using for, forEach(), map(), etc.).',
  'Search for elements (using indexOf(), includes(), find()).',
  'Transform arrays (using sort(), filter(), map()).'
);

const arrayFunctionsWithLi = arrayFunctions.map(function (item) {
  return `<li>  ${item}  </li>`;
});

const arrayFunctionsWithLiString = arrayFunctionsWithLi.join(' ');

const body = document.querySelector('body');
body.innerHTML = `<ol> ${arrayFunctionsWithLiString}  </ol>`;
