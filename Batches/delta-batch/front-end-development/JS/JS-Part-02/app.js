// console.log("Hello World");
// console.log("Hello Rishi");

/* 
    Template Literals - They are used to add embedded expressions in a string.
    console.log(`.....${...}.......`);
*/

// let a = 5;
// let b = 10;
// console.log(`Total price ${a+b} rupees`);

/* 
    Operators in JS - 
        a. Arithmetic (+,-,*,/m%,**)
        b. Unary (++,--)
        c. Assignment (=,+=,-=,*=,/=,%= etc.)
        d. Comparsion
        e. Logical 
*/

// Arithmetic Operators

// let a = 10;
// let b = 5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// Unary Operators
// console.log(a++);
// console.log(++a);

/*
    Conditionals Statements - 
        a. if-else
        Sample Code - 
            if(some condition){
                // Do something
            }
            // some code after if

        b. nested if-else
        c. switch
*/
// let age = 23;
// if(age >= 18){
//     console.log("You can vote");
//     console.log("You can drive");
// }

// let age = 19;
// if(age >= 18){
//     console.log("You can vote");
// }
// else if(age < 18){
//     console.log("You are a teenager")
// }
// else{
//     console.log("Incorrect age");
// }

// let size = 'L';

// if(size == 'XL'){
//     console.log(`The price for ${size} is Rs. 250`);
// }
// else if(size == 'L'){
//     console.log(`The price for ${size} is Rs. 200`);
// } 
// else if(size == 'M'){
//     console.log(`The price for ${size} is Rs. 100`);
// } 
// else if(size == 'S'){
//     console.log(`The price for ${size} is Rs. 50`);
// } 

// Nested if-else condition
// let marks = 98;

// if(marks >= 33){
//     console.log("Pass");
//     if(marks >= 80){
//         console.log("Grade : O");
//     }
//     else{
//         console.log("Grade : A");
//     }
// }
// else{
//     console.log("Better luck next time");
// }

/*
    truthy & falsy - Everthing in JS is true or false (in boolean context).
    This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.

    Falsy values - false, 0, -0, On(BigInt value), ""(empty string), null, undefined, NaN

    Truthy values - Everything else
*/
/*
    Alert - displays an alert message on the page.
    alert("something is wrong!");

    Prompt displays a dialog box that asks user for some input.
    prompt("please enter your roll no.");
*/

// alert("something is wrong!");
// alert("This is a simple alert!");

// console.log("This is console log message");
// console.error("This is error log message");
// console.warn("This is warning log message");

let fName = prompt("Please enter your name");
console.log(`Your name is ${fName}`);