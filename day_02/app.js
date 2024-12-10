// let num1 = 1005;
// let num2 = "1005";
// if (num1 === num2) {
//     console.log("num1 and num2 are equal");
// }

// else if (num1 > num2) {
//     console.log("num1 is greater than num2")
// }
    
// else if (num1 < num2) {
//     console.log("num1 is smaller than num2")
// }

// else {
//     console.log("num1 and num2 are not equal");
// }
// prompt("enter the date")
// const nameOfday = "Monday";
// if (nameOfday === "Monday") {
//     console.log("Today is monday");
//     console.log("Today is weekday!");
// }
// else if (nameOfday === Tuesday) {
//     console.log("Today is Tuesday");
//     console.log("Today is weekday!");

// }
// else if (nameOfday === Wednesday) {
//     console.log("Today is Wednesday");
//     console.log("Today is weekday!");

// }
// else if (nameOfday === Thursday) {
//     console.log("Today is Thursday");
//     console.log("Today is weekday!");

// }
// else if (nameOfday === Friday) {
//     console.log("Today is Friday");
//     console.log("Today is weekday!");

// }
// else {
//     console.log("Today is weekend");

// }

const nameOfday = "Saturday";

switch (nameOfday) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(`Today is ${nameOfday}`)
        console.log("Today is weekday!");
        break;
    
    default:
        console.log("Today is weekend!");

}


try {
    const firstName = "Alex";
    const lastName = "Shrestha";
    const fullname = firstName + "" + lastName;
    console.log(fullname);
}