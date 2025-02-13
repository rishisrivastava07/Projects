/* 
    Functions in JS : - 
    *) Function Definition (Telling JS)
        function funcName(){
            // do something
        }
    *) Function Calling (Using the function)
        funcName();
*/

// function hello(){
//     console.log("Hello");
// }

// hello();

// Practise Qs - 1 - Create a function that prints a poem

function printPoem(){
    console.log("Twinkle twinkle little stars");
    console.log("how I wonder what you are");
}

// printPoem();

// Create a function to roll a dice & always displays the value of the dice (1 to 6) -

function rollDice(){
    console.log(Math.floor((Math.random()*6) + 1));
}

// rollDice();

/*
    Functions with arguements - value we pass to the function
    function funcName(arg1,arg2,..){
        do something
    }
*/

function printName(name){
    console.log(name);
}

// let fname = prompt("Enter your name : ");
// printName(fname);

// Practise Qs - 2 - create function that gives us the average of 3 numbers
function average(num1,num2,num3){
    let avg = (num1+num2+num3)/3;
    console.log(`Average of ${(num1),(num2),(num3)} is ${avg}`);
}

// average(1,2,3);

/*
    Functions with return value - used to return some values from the function.
    function funcName(arg1,arg2,..){
        // do something
        return val;
    }
*/

// function sum(max){
//     let sumVal = 0;
//     for(let i = 1; i <= max; i++){
//         sumVal += i;
//     }
//     return sumVal;
// }

// console.log(sum(5));

/*
    Scope - determines the accessibilty of variables, objects and functions from different parts of the code.
        1. function scope - variables defined inside a function are not accessible (visible) from outside the function 
        2. Block - variables declared inside a {} block cannot be accessed from outside the block.
        3. Lexical - a variable defined outside a function can be accessible inside another function defined after the variable declaration. The opposite is NOT true.
*/
// let sum = 54;   // Global Scope
// function calSum(a,b){
//     let sum = a+b; // Function Scope
//     console.log(sum);
// }

// calSum(1,3);

{
    let a = 25;
    const b = 25;
    var c = 25;
}

// console.log(a);  // throws an error
// console.log(b); // throws an error
// console.log(c);  // prints successfully but not good practise to use var

function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }

    innerFunc();
}

// outerFunc();

/*
    Functions Expressions - u
    const variables = function(arg1,arg2,..){
        // do something
    }
*/

const sum = function(a,b){
    return a+b;
}

// sum(2,3);

/*
    Higher Order Functions - A function that does one or both:
        1. takes one or mutliple functions as arguments.
        2. returns a function
*/

function multipleGreet(func, n){
    for(let i = 1; i <=n; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

// multipleGreet(greet,2);

function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log((n%2==0));
        }
    }
    else{
        console.log("wrong request");
    }
}

let request = "odd";

// Methods - actions that can be performed on an object.

// const calc = {
//     num : 55,
//     add : function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     multiply: function(a,b){
//         return a*b;
//     }
// }
const calc = {
    num : 55,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    multiply(a,b){
        return a*b;
    }
}

let countVowels = function(string){
    let count = 0;
    let len = string.length;
    let i = 0;
    while(i != len-1){
        if((string[i] == 'a')||(string[i] == 'e') || (string[i] == 'e') || (string[i] == 'e') || (string[i] == 'e')){
            count ++;
        }
        i++;
    }
    return count;
}